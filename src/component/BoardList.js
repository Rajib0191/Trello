import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BoardContext } from '../contexts/BoardContext';
import BoardItem from './BoardItem';

const BoardList = () => {
    const { boards } = useContext(BoardContext);
    return (
        <div className="board_section">
            {boards?.map(board => (
                <Link key={board.id} to={`/${board.id}`}>
                    <BoardItem board={board} />
                </Link>
            ))}
        </div>
    );
};

export default BoardList;