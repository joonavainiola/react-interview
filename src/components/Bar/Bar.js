import React from 'react';
import './Bar.css';
import { FaPlus } from "react-icons/fa";

const Bar = ({ onSubmit, newTodoName, onInputChange }) => {
    return (
        <div className="bar">
            <form
                className="bar__wrapper"
                onSubmit={onSubmit}>
                <input
                    data-testid="form-input"
                    placeholder="Add new todo"
                    value={newTodoName}
                    onChange={onInputChange}
                />
                <button
                    type="submit">
                    <FaPlus className="add" size="20" />
                </button>
            </form>
        </div>
    );
}

export default Bar;