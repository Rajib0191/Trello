import { createContext, useReducer } from "react";
import TaskReducer from "../reducers/TaskReducer";

export const TaskContext = createContext();

const TaskProvider = (props) => {
    const [tasks, dispatchTaskAction] = useReducer(TaskReducer, []);
    // console.log(tasks, 'Tasks');
    return (
        <TaskContext.Provider value={{ tasks, dispatchTaskAction }}>
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskProvider;