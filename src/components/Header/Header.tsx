import React, { useState } from 'react';

import { useAppDispatch } from '../../app/hooks/supportHooks';
import { startGame } from './headerSlice';
import './Header.scss'

const Header = () => {

	const dispatch = useAppDispatch();

    return (
        <header className="Header">
            <div className="Header__hoverzone">
                <button onClick={() => dispatch(startGame())} className="Header__button"></button>
            </div>
        </header>
    );
}

export default Header;
