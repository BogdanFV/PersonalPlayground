import React from 'react';

import './Header.scss'
import startGame from '../../../scripts/startGame'


const handleStartGame = () => {
    startGame();
};

const Header: React.FC = () => {

    return (
        <header className="Header">
            <div className="Header__hoverzone">
                <button className="Header__button" onClick={handleStartGame}></button>
            </div>
        </header>
    );
}

export default Header;
