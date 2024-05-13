import { START_GAME, MOVE_CHARACTER_LEFT, MOVE_CHARACTER_RIGHT, MOVE_CHARACTER_UP, MOVE_CHARACTER_DOWN } from './types';

export const startGame = () => {
    return {
        type: START_GAME
    }
};

export const moveCharacterLeft = () => {
    return {
        type: MOVE_CHARACTER_LEFT
    }
};

export const moveCharacterRight = () => {
    return {
        type: MOVE_CHARACTER_RIGHT
    }
};

export const moveCharacterUp = () => {
    return {
        type: MOVE_CHARACTER_UP
    }
};

export const moveCharacterDown = () => {
    return {
        type: MOVE_CHARACTER_DOWN
    }
};
