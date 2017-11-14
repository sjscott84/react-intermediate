import { combineReducers } from 'redux';
import { START_GAME } from 'actions/actions';

export const holesLength = 5;

const initialGameState = {
  holeState: Array(holesLength).fill(false),
  isGameActive: false
};

const game = (state = initialGameState, action) => {
  switch (action.type) {
  case START_GAME:
    return Object.assign({}, state, {
      isGameActive: true
    });
  default:
    return state;
  }
};

export default combineReducers({
  game
});
