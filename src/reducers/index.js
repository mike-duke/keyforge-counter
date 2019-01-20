import { combineReducers } from redux;
import { playerReducer } from './playerReducer';

export const rootReducer = combineReducers({
  player1: playerReducer[0],
  player2: playerReducer[1]
});