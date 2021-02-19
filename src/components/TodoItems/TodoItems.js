import React from 'react';
import './TodoItems.css';
import Hello from '../Hello/Hello';

const TodoItems = ({ todos, onClick, onRemoveClick }) => {
    return (
        <div className="todoitems">
            {
                todos && todos.length > 0 ?
                    todos.map(todo =>
                        <Hello
                            key={todo.id}
                            todo={todo}
                            onClick={onClick}
                            onRemoveClick={onRemoveClick}
                        />
                    ) :
                    <p className="notodos">There's no todos to show.</p>
            }
        </div>
    )
}

export default TodoItems;