import React, { useContext, useState } from 'react';
import shortid from 'shortid';
import { BoardContext } from '../contexts/BoardContext';

const BoardCreatingForm = () => {
    const [boardTitle, setBoardTitle] = useState('');
    const { dispatchBoardAction } = useContext(BoardContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (boardTitle) {
            dispatchBoardAction({ type: 'CREATE_BOARD', payload: { id: shortid.generate(), title: boardTitle } });
            setBoardTitle('');
        } else {
            alert('Enter Board Title');
        }
    }
    return (
        <div className='align-center m-top-md'>
            <form className='board-creating-form' onSubmit={(e) => handleSubmit(e)}>
                <input type='text' name='boardTitle' value={boardTitle} placeholder='Enter Board Name'
                    onChange={(e) => setBoardTitle(e.target.value)}
                />
                <button type='submit' onClick={(e) => handleSubmit(e)}>Create Board</button>
            </form>
        </div>
    );
};

export default BoardCreatingForm;