import { createSlice } from '@reduxjs/toolkit';

interface CoordinatesState {
  x: number;
  y: number;
}

const initialState: CoordinatesState = {
  x: 0,
  y: 0,
};

const SPEED_COEFFICENT = 10;

const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    moveUp: (state) => {
      state.y -= SPEED_COEFFICENT;
    },
    moveDown: (state) => {
      state.y += SPEED_COEFFICENT;
    },
    moveLeft: (state) => {
      state.x -= SPEED_COEFFICENT;
    },
    moveRight: (state) => {
      state.x += SPEED_COEFFICENT;
    },
  },
});

export const { moveUp, moveDown, moveLeft, moveRight } = coordinatesSlice.actions;

export default coordinatesSlice.reducer;
