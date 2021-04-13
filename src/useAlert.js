import {useEffect} from 'react';
import {Alert} from 'react-native';
import {clearMessage} from './redux/actions';

export default (state_messages, dispatch) => {
  useEffect(() => {
    if (!state_messages.message) return;
    Alert.alert('Horoscope', state_messages.message, [
      {
        text: 'OK',
        onPress: () => {
          dispatch(d => d(clearMessage()));
        },
      },
    ]);
  }, [state_messages]);
};
