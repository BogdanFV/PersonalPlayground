import React, { useState } from 'react';

// import startGame from '../../scripts/startGame.ts'


const handleStartGame = () => {
    // startGame();
    console.log("Game started");
};

const Header: React.FC = () => {
    // const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <header className="Header">
                <button className="Header__button" onClick={handleStartGame}></button>
            </header>
            <div className="Header__hoverzone">
            </div>
        </>
    );
}

export default Header;
