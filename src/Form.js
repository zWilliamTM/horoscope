import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import {connect, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {requestSunsign} from './redux/actions';
import Loading from './Loading';
import useAlert from './useAlert';
import DateTimePicker from 'react-native-modal-datetime-picker';
import * as Yup from 'yup';

const Form = ({navigation, sunsignThunk, message, isnavigate}) => {
  const dispatch = useDispatch();
  useAlert(message, dispatch);

  const [date, setDate] = useState(new Date());
  const [isShowCalendar, setShowCalendar] = useState(false);

  const handleCalendar = () => {
    setShowCalendar(state => !state);
  };

  const formik_form = {
    initialValues: {name: ''},
    onSubmit: values => {
      const d = date.getTime();
      sunsignThunk({...values, date: d}, 'Horoscope');
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too short!')
        .max(15, 'Too Long!')
        .required('Required'),
    }),
  };

  useEffect(() => {
    if (isnavigate) {
      navigation.push(isnavigate);
    }
  }, [isnavigate]);

  return (
    <View style={styles.container}>
      <Formik {...formik_form}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.panel}>
            <TextInput
              mode="outlined"
              label="Name"
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <Button mode="outlined" onPress={handleCalendar}>
              Calendar
            </Button>
            <Button mode="contained" onPress={handleSubmit}>
              Horoscope
            </Button>
            <Text>{date.toString() || 0}</Text>
          </View>
        )}
      </Formik>
      <DateTimePicker
        testID="Datepiker"
        isVisible={isShowCalendar}
        mode="date"
        onConfirm={date => setDate(date)}
        onCancel={handleCalendar}
      />
      <Loading />
    </View>
  );
};

const mapStateToProps = state => ({
  message: state.messages.message,
  isnavigate: state.messages.navigate,
});

const mapDispatchToProps = dispatch => ({
  sunsignThunk: (payload, nav) => dispatch(requestSunsign(payload, nav)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    justifyContent: 'center'
  },
  panel: {
    justifyContent: 'space-between',
    height: '50%',
  }
});
