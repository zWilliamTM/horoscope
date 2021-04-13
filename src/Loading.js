import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {connect} from 'react-redux';

const Loading = ({loading}) =>
  loading ? (
    <View
      style={{
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        elevation: 5,
        justifyContent: 'center',
      }}>
      <ActivityIndicator animating={true} />
    </View>
  ) : (
    <></>
  );

const mapStateToProps = state => ({
  loading: state.messages.loading,
});
export default connect(mapStateToProps)(Loading);
