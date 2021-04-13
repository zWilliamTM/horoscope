import {combineReducers} from 'redux';
import {Actions} from './actions';

const initialMessages = {
  message: '',
  flags: '',
  loading: false,
  navigate: '',
};

const initalForm = {
};

export default combineReducers({
  messages: (state = initialMessages, action) => {
    switch (action.type) {
      case Actions.MSG_MESSAGE:
        return {...state, message: action.payload};
      case Actions.MSG_CLEAR:
        return {...state, message: ''};
      case Actions.MSG_START_LOADING:
        return {...state, loading: true};
      case Actions.MSG_FINISH_LOADING:
        return {...state, loading: false};
      case Actions.MSG_FORCE_NAVIGATION:
        return {...state, navigate: action.payload};
      case Actions.MSG_FORCE_NAVIGATION_FINISH:
        return {...state, navigate: ''};
      default:
        return state;
    }
  },
  form: (state = initalForm, action) => {
    if (action.type === Actions.PUT_DATA) return action.payload;
    return state;
  },
});
