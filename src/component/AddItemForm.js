import React from 'react';
import { icons } from '../assets';

const AddItemForm = ({ setEditMode, listForm, submitHandler, title, onChangeHandler }) => {
    const createHandler = (e) => {
        if (title !== "") {
            submitHandler(e);
        } else {
            alert(`Please Provide a Valid Title for the list`);
        }
    };
    return (
        <div className='form_container'>
            <div className='form_card'>
                <form className='' onSubmit={(e) => createHandler(e)}>
                    <textarea
                        autoFocus
                        placeholder={listForm ? "Enter The List Title" : "Enter The Task Title"}
                        value={title}
                        onChange={onChangeHandler}
                        className="form_textarea"
                        cols="30"
                        rows="2"
                    />
                </form>
            </div>
            <div className='button_container'>
                <button onClick={(e) => createHandler(e)} className='add_button'>{listForm ? 'Add List' : 'Add Task'}</button>
                <img src={icons.crossIcon} className='form_icon'
                    onClick={() => setEditMode(false)}
                />
            </div>
        </div>
    );
};

export default AddItemForm;