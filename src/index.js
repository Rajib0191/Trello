import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App'
import reportWebVitals from './reportWebVitals';
import BoardProvider from './contexts/BoardContext';
import ListProvider from './contexts/ListContext';
import TaskProvider from './contexts/TaskContext';


ReactDOM.render(
  <BoardProvider>
    <ListProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ListProvider>
  </BoardProvider>,
  document.getElementById('root')
);

reportWebVitals();
