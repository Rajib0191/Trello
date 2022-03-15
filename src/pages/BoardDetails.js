import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import shortid from 'shortid';
import AddItem from '../component/AddItem';
import AddItemForm from '../component/AddItemForm';
import ListCard from '../component/ListCard';
import { BoardContext } from '../contexts/BoardContext';
import { ListContext } from '../contexts/ListContext';
import { DragDropContext } from 'react-beautiful-dnd';

const BoardDetails = () => {
    const [editMode, setEditMode] = useState(false);
    const [listTitle, setListTitle] = useState('');
    const { boardId } = useParams();
    const { lists, dispatchListAction } = useContext(ListContext);
    const { dispatchBoardAction } = useContext(BoardContext);

    const submitHandler = (e) => {
        e.preventDefault();
        const list = {
            id: shortid.generate(),
            title: listTitle,
            boardId: boardId,
        }
        dispatchListAction({ type: 'CREATE_LIST', payload: list });
        dispatchBoardAction({ type: 'ADD_LIST_ID_TO_BOARD', payload: { id: boardId, listId: list.id } });

        setListTitle("");
        setEditMode(false);
    }
    const dragEndHandler = (result) => {
        console.log(result);
        const { destination, source, draggableId } = result;

        if (!destination) {
            return
        }
        if (destination.droppableId !== source.droppableId) {
            dispatchListAction({ type: 'REMOVE_TASK_ID_FROM_LIST', payload: { id: source.droppableId, taskId: draggableId } })
            dispatchListAction({ type: 'ADD_TASK_ID_TO_LIST', payload: { id: destination.droppableId, taskId: draggableId } })
            // dispatchTaskAction({ type: 'DELETE_TASK', payload: { id: task.id } })
        } else if (destination.droppableId === source.droppableId) {
            dispatchListAction({ type: 'SORT_TASK_ID_IN_LIST', payload: { targetIndex: destination.index, sourceIndex: source.index, droppableId: source.droppableId } })
        }
    }

    return (
        <DragDropContext onDragEnd={dragEndHandler}>
            <div>
                <Link to='/'>
                    <button className='back_home_button'>Back to Boards</button>
                </Link>
                <div className='list_task_container'>
                    {
                        lists.filter((item) => item.boardId === boardId)
                            .map((list) => (
                                <ListCard list={list} key={list.id} />
                            ))
                    }
                    {editMode ?
                        <AddItemForm
                            setEditMode={setEditMode}
                            listForm
                            submitHandler={submitHandler}
                            title={listTitle}
                            onChangeHandler={(e) => setListTitle(e.target.value)}
                        />
                        :
                        <AddItem listAddItem setEditMode={setEditMode} />
                    }
                </div>
            </div>
        </DragDropContext>
    );
};

export default BoardDetails;