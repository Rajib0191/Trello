import { createContext, useReducer } from "react";
import boardReducer from "../reducers/BoardReducer";
export const BoardContext = createContext();

const BoardProvider = (props) => {
    const [boards, dispatchBoardAction] = useReducer(boardReducer, []);
    // console.log(boards, 'Boards');

    return (
        <BoardContext.Provider value={{ boards, dispatchBoardAction }}>
            {props.children}
        </BoardContext.Provider>
    )
}
export default BoardProvider;