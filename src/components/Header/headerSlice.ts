import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../../app/store';

export interface GameState {
  value: boolean;
}

const initialState: GameState = {
  value: false,
};

export const headerSlice = createSlice({
  name: 'gameStatus',
  initialState,
  reducers: {
    startGame: (state) => {
      state.value = !state.value;
      console.log(state.value);
    },
  },
});

export const { startGame } = headerSlice.actions;

export const selectHeaderState = (state: RootState) => state.isGameStarted;

export const gameStatus = createSelector(
  [selectHeaderState],
  (state) => state.value
);

export default headerSlice.reducer;
