import React, { useContext } from 'react';
import { icons } from '../assets';
import { BoardContext } from '../contexts/BoardContext';

const BoardItem = ({ board }) => {
    const { dispatchBoardAction } = useContext(BoardContext);
    const removeBoardHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatchBoardAction({ type: 'DELETE_BOARD', payload: { id: board.id } })
    }
    return (
        <div className="board_box">
            <div className="board_details">
                <h3 className="title-gap">{board.title}</h3>
                <img className="board_item_icon" onClick={(e) => removeBoardHandler(e)} src={icons.crossIcon} alt="Delete Board" />
                <p className="title-gap">This board has {board.lists.length} List</p>
            </div>
        </div>
    );
};

export default BoardItem;