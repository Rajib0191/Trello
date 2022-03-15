import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from '../pages/Board';
import BoardDetails from '../pages/BoardDetails';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Board />} />
                <Route path='/:boardId' element={<BoardDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;