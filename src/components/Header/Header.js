import React from 'react';
import './Header.css';

const Header = ({ completed }) => {
    return (
        <header>
            <div className="header__heading">
                <h1>To<span>Do</span>List</h1>
                <p>{completed} %</p>
            </div>
            <div className="header__completed">
                <div className="header__completed1">
                    <div className="header__completed2" style={{ width: `${completed}%` }}></div>
                </div>
            </div>
        </header>
    )
}

export default Header;