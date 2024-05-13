import React from 'react';

import { connect } from 'react-redux';
import { startGame, moveCharacterLeft } from '../../../scripts/redux/actions';
import './Header.scss'

interface HeaderProps {
    onStartGame: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className="Header">
            <div className="Header__hoverzone">
                <button className="Header__button" onClick={props.onStartGame}></button>
            </div>
        </header>
    );
}

function mapStateToProps(state: { gameReducer: any; }) {
	const { gameReducer } = state;
	return {
        isGameStarted: gameReducer.isGameStarted
	}
}

function mapDispatchToProps(dispatch: (arg0: { type: string; }) => any) {
	return {
		onStartGame: () => {
			return dispatch(startGame());
		},

		onMoveCharacterLeft: () => {
			return dispatch(moveCharacterLeft());
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
