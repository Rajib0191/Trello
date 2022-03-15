import React from 'react';
import BoardCreatingForm from '../component/BoardCreatingForm';
import BoardList from '../component/BoardList';

const Board = () => {
    return (
        <div>
            <BoardCreatingForm />
            <BoardList />
        </div>
    );
};

export default Board;