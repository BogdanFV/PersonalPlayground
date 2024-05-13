interface CharacterState {
  x: number;
  y: number;
}

const initialState: CharacterState = {
  x: 0,
  y: 0
};

const characterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'MOVE_CHARACTER_LEFT':
      return {
        ...state,
        x: state.x - 1
      };
    case 'MOVE_CHARACTER_RIGHT':
      return {
        ...state,
        x: state.x + 1
      };
    case 'MOVE_CHARACTER_UP':
      return {
        ...state,
        y: state.y - 1
      };
    case 'MOVE_CHARACTER_DOWN':
      return {
        ...state,
        y: state.y + 1
      };
    default:
      return state;
  }
};

export default characterReducer;
