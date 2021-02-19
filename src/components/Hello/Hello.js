import React from 'react';
import './Hello.css';
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Hello = ({ todo, onClick, onRemoveClick }) => {

    return (
        <div className={todo.complete ? "hello leftborder" : "hello"}>
            <div className="hello__text">
                <p className={todo.complete ? "lightfont" : ""}>{todo.name}</p>
            </div>
            <div className="hello__buttons">
                <button
                    className={todo.complete ? "hello__btn complete" : "hello__btn incomplete"}
                    onClick={() => onClick(todo.id)}>
                    <FaCheck size="16" />
                </button>
                <button
                    className="hello__btn remove"
                    onClick={() =>
                        onRemoveClick(todo.id)
                    }>
                    <FaTrashAlt size="16" />
                </button>
            </div>
        </div>
    );
}

export default Hello;