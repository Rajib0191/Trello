import React, { useContext, useState } from 'react';
import { icons } from '../assets';
import AddItem from './AddItem';
import AddItemForm from './AddItemForm';
import TaskCard from './TaskCard';
import { ListContext } from '../contexts/ListContext';
import { TaskContext } from '../contexts/TaskContext';
import { BoardContext } from '../contexts/BoardContext';
import shortid from 'shortid';
import { Droppable } from 'react-beautiful-dnd';

const ListCard = ({ list }) => {
    // console.log(list)
    const { dispatchListAction } = useContext(ListContext);
    const { dispatchBoardAction } = useContext(BoardContext);
    const { tasks: allTask, dispatchTaskAction } = useContext(TaskContext);

    const [editMode, setEditMode] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const id = shortid.generate();
        const listId = list.id;
        const task = {
            id,
            title: taskTitle,
            listId,
            boardId: list.boardId,
        };
        dispatchTaskAction({ type: 'CREATE_TASK', payload: task });
        dispatchListAction({ type: 'ADD_TASK_ID_TO_LIST', payload: { id: listId, taskId: task.id } });
        dispatchBoardAction({ type: 'ADD_TASK_ID_TO_BOARD', payload: { id: task.boardId, taskId: task.id } });

        setTaskTitle("");
        setEditMode(false);
    };
    const removeHandler = () => {
        dispatchListAction({ type: 'DELETE_LIST', payload: { id: list.id } })
        dispatchBoardAction({ type: 'REMOVE_LIST_ID_FROM_A_BOARD', payload: { id: list.boardId, listId: list.id } })
    }

    return (
        <Droppable droppableId={list.id}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    <div className='list_container'>
                        <div className='list_title_wrapper'>
                            <h4>{list.title}</h4>
                            <img src={icons.crossIcon} onClick={removeHandler} className="list_icon" />
                        </div>
                        {
                            list
                                ?.tasks?.map((item) => {
                                    return allTask.find(t => t.id === item)
                                })?.map((task, index) => (
                                    <TaskCard index={index} task={task} key={task.id} />
                                ))
                        }
                        {
                            editMode ?
                                <AddItemForm
                                    submitHandler={submitHandler}
                                    title={taskTitle}
                                    onChangeHandler={(e) => setTaskTitle(e.target.value)}
                                    setEditMode={setEditMode}
                                    editMode={editMode}
                                />
                                :
                                <AddItem setEditMode={setEditMode} />
                        }
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};
export default ListCard;