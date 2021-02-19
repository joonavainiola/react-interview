import React, { useEffect, useState } from 'react';
import { todoList } from './todoList';
import './App.css';

import Header from './components/Header/Header';
import TodoItems from './components/TodoItems/TodoItems';
import Bar from './components/Bar/Bar';

const App = () => {

    const [newTodoName, setNewTodoName] = useState('');
    const [todos, setTodos] = useState(todoList);
    const [completed, setCompleted] = useState(0);

    // Generate ID for the new task
    const generateNewId = () => {
        if (todos.length > 0) {
            return todos[todos.length - 1].id + 1;
        } else {
            return 1;
        }
    }

    // Add new task
    const onSubmit = (event) => {
        event.preventDefault();

        if (newTodoName.length < 1) return;

        let newTodos = [...todos];
        newTodos.push({
            id: generateNewId(),
            name: newTodoName,
            complete: false
        });

        setTodos(newTodos);
        setNewTodoName('');
    }

    // Mark task as complete/incomplete
    const onClick = (id) => {
        const todoItems = [...todos];
        for (let i = 0; i < todos.length; i++) {
            if (todoItems[i].id === id) {
                todoItems[i].complete = !todoItems[i].complete;
            }
        }

        setTodos(todoItems);
    }

    // Change the state of newTodoName to the current input value
    const onChange = (event) => {
        setNewTodoName(event.target.value);
    }

    // Remove a task
    const onRemoveClick = (id) => {
        const todoItems = [...todos];
        const index = todoItems.findIndex(todo => todo.id === id);
        todoItems.splice(index, 1);
        setTodos(todoItems);
    }

    // Get percentage of completed tasks
    const getCompleted = () => {
        const completedTasks = todos.filter(todo => todo.complete);
        const percentage = Math.round((completedTasks.length / todos.length) * 100);
        if (percentage) {
            setCompleted(percentage);
        } else {
            setCompleted(0);
        }
    }

    // Count the percentage of completed tasks on first render or when the value of todos changes
    useEffect(() => {
        getCompleted();
    }, [todos]);

    return (
        <div className="App">
            <div className="App__content">
                <Header
                    completed={completed}
                />
                <TodoItems
                    todos={todos}
                    onClick={onClick}
                    onRemoveClick={onRemoveClick}
                />
                <Bar
                    onSubmit={onSubmit}
                    newTodoName={newTodoName}
                    onInputChange={onChange}
                />
            </div>
        </div>
    );
};

export default App;
