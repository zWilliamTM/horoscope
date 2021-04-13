import React, {useEffect, useLayoutEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {forceNavigationFinishAction} from './redux/actions';
import {Text} from 'react-native-paper';

const Horoscope = ({navigation, clearNavigate, info}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${info.name} - ${info.sunsign}`,
    });
  }, []);

  useEffect(() => {
    clearNavigate();
  }, []);

  return (
    <View style={{flex: 1, padding: '10%', justifyContent: 'center'}}>
      <Text>{info.horoscope}</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  info: state.form,
});

const mapDispatchToProps = dispatch => ({
  clearNavigate: () => dispatch(d => d(forceNavigationFinishAction())),
});

export default connect(mapStateToProps, mapDispatchToProps)(Horoscope);
