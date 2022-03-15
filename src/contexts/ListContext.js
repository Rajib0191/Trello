import { createContext, useReducer } from "react";
import ListReducer from "../reducers/ListReducer";

export const ListContext = createContext();

const ListProvider = (props) => {
    const [lists, dispatchListAction] = useReducer(ListReducer, []);
    // console.log(lists, 'Lists');

    return (
        <ListContext.Provider value={{ lists, dispatchListAction }}>
            {props.children}
        </ListContext.Provider>
    )
}
export default ListProvider;