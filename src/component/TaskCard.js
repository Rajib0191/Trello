import React, { useContext, useState } from 'react';
import { icons } from '../assets';
import AddItemForm from './AddItemForm';
import { BoardContext } from '../contexts/BoardContext';
import { ListContext } from '../contexts/ListContext';
import { TaskContext } from '../contexts/TaskContext';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard = ({ task, index }) => {
    // console.log(task)
    const [taskTitle, setTaskTitle] = useState(task.title);
    const [editMode, setEditMode] = useState(false);

    const { dispatchTaskAction } = useContext(TaskContext);
    const { dispatchListAction } = useContext(ListContext);
    const { dispatchBoardAction } = useContext(BoardContext);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatchTaskAction({ type: 'UPDATE_TASK', payload: { id: task.id, title: taskTitle } });
        setEditMode(false);
    }

    const removeTaskHandler = () => {
        dispatchTaskAction({ type: 'DELETE_TASK', payload: { id: task.id } });
        dispatchListAction({ type: 'REMOVE_TASK_ID_FROM_LIST', payload: { id: task.listId, taskId: task.id } });
        dispatchBoardAction({ type: 'REMOVE_TASK_ID_FROM_A_BOARD', payload: { id: task.boardId, taskId: task.id } });
    }
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {
                        editMode ? (
                            <AddItemForm
                                onChangeHandler={(e) => setTaskTitle(e.target.value)}
                                title={taskTitle}
                                setEditMode={setEditMode}
                                submitHandler={submitHandler}
                            />
                        ) : (
                            <div
                                onClick={(e) => {
                                    setEditMode(true);
                                }}
                                className="task-card"
                            >
                                <p>{taskTitle}</p>
                                <img
                                    onClick={removeTaskHandler}
                                    className="add_item_icon"
                                    src={icons.crossIcon}
                                    alt=""
                                />
                            </div>
                        )}
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;