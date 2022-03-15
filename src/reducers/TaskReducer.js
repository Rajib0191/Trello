const TaskReducer = (tasks = [], action) => {
    switch (action.type) {
        case 'CREATE_TASK': {
            const task = {};
            task.id = action.payload.id;
            task.title = action.payload.title;
            task.boardId = action.payload.boardId;
            task.listId = action.payload.listId;
            return [...tasks, task]
        }
        case 'DELETE_TASK': {
            return tasks.filter(task => task.id !== action.payload.id);
        }
        case 'UPDATE_TASK': {
            const task = tasks.find(item => item.id === action.payload.id);
            task.title = action.payload.title;
            return [...tasks];
        }
        default: {
            return tasks;
        }
    }
}
export default TaskReducer;
