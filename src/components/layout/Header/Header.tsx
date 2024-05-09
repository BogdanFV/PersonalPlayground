import React from 'react';

import './Header.scss'
import { useDispatch } from 'react-redux';
import { startGame } from '../../../scripts/actions';


const Header: React.FC = () => {

    const dispatch = useDispatch();

    const handleStartGame = () => {
        dispatch(startGame());
    };

    return (
        <header className="Header">
            <div className="Header__hoverzone">
                <button className="Header__button" onClick={handleStartGame}></button>
            </div>
        </header>
    );
}

export default Header;
