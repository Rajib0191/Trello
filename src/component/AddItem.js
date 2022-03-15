import React from 'react';
import { icons } from '../assets/index'
const AddItem = ({ listAddItem, setEditMode }) => {
    // console.log(listAddItem)
    return (
        <div onClick={() => setEditMode(true)} className={listAddItem ? 'add_item list_add_item' : 'add_item task_add_item'}>
            <img src={icons.plusIcon} className="add_list_icon" alt="" />
            <p className="add_item_text">{listAddItem ? 'Add List' : 'Add Task'} </p>
        </div>
    );
};

export default AddItem;