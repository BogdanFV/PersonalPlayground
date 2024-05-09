const initialState = {
    isGameStarted: false
};

const gameReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'START_GAME':
            return {
                ...state,
                isGameStarted: true
            };
        default:
            return state;
    }
};

export default gameReducer;
