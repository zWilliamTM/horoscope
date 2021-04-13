import axios from 'axios';
import {toMeDate, sayZodiac} from '../utils';

export const Actions = {
  MSG_START_LOADING: 'MSG_START_LOADING',
  MSG_FINISH_LOADING: 'MSG_FINISH_LOADING',
  MSG_MESSAGE: 'MSG_MESSAGE',
  MSG_CLEAR: 'MSG_CLEAR',

  MSG_FORCE_NAVIGATION: 'MSG_FORCE_NAVIGATION',
  MSG_FORCE_NAVIGATION_FINISH: 'MSG_FORCE_NAVIGATION_FINISH',

  PUT_DATA: 'PUT_DATA',
};

const putDataAction = payload => ({type: Actions.PUT_DATA, payload});

const startLoadingAction = () => ({type: Actions.MSG_START_LOADING});
const finishLoadingAction = () => ({type: Actions.MSG_FINISH_LOADING});

export const putMessage = payload => ({type: Actions.MSG_MESSAGE, payload});
export const clearMessage = () => ({type: Actions.MSG_CLEAR});

const forceNavigationAction = payload => ({
  type: Actions.MSG_FORCE_NAVIGATION,
  payload,
});
export const forceNavigationFinishAction = () => ({
  type: Actions.MSG_FORCE_NAVIGATION_FINISH,
});

export const requestSunsign = (form, navigation = '') => async dispatch => {
  try {
    dispatch(startLoadingAction());
    const requestInfo = async sunsign => {
      try {
        const url = `http://horoscope-api.herokuapp.com/horoscope/today/${sunsign}`;
        const res = await axios(url);
        return res.data;
      } catch {}
    };

    const sunsign = sayZodiac(form.date);
    const payload = await requestInfo(sunsign);
    dispatch(putDataAction({...form, ...payload}));
    dispatch(forceNavigationAction(navigation));
  } catch (e) {
    dispatch(putMessage(e.toString()));
  } finally {
    dispatch(finishLoadingAction());
  }
};
