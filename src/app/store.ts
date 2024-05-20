import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import headerReducer from '../components/Header/headerSlice';
import coordinatesReducer from '../features/coordinatesSlice';

export const store = configureStore({
  reducer: {
    isGameStarted: headerReducer,
    coordinates: coordinatesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
