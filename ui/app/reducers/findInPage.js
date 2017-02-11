import {
  TOGGLE_FIND_IN_PAGE_DIALOG, UPDATE_FIND_IN_PAGE_TEXT, UPDATE_FIND_IN_PAGE_MATCHES,
} from '../constants/actions';

const initialState = {
  isOpen: false,
  text: '',
  activeMatch: 0,
  matches: 0,
};


const findInPage = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FIND_IN_PAGE_DIALOG: {
      return Object.assign({}, state, {
        isOpen: !state.isOpen,
      });
    }
    case UPDATE_FIND_IN_PAGE_TEXT: {
      return Object.assign({}, state, {
        text: action.text,
      });
    }
    case UPDATE_FIND_IN_PAGE_MATCHES: {
      return Object.assign({}, state, {
        activeMatch: action.activeMatch,
        matches: action.matches,
      });
    }
    default:
      return state;
  }
};

export default findInPage;
