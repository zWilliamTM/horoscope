import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useColorScheme, View} from 'react-native';
import Form from './Form';
import Horoscope from './Horoscope';
import ReduxProvider from './redux/store';
import {Provider as PProvider} from 'react-native-paper';
import {CombinedDarkTheme, CombinedDefaultTheme} from './useThemen';

const Stack = createStackNavigator();

const App = () => {
  const schemeTheme = useColorScheme();
  const theme =
    schemeTheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
  return (
    <View style={{flex: 1}}>
      <ReduxProvider>
        <PProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName="Form">
              <Stack.Screen
                name="Form"
                component={Form}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Horoscope"
                component={Horoscope}
                options={{
                  headerTitleAlign: 'center',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PProvider>
      </ReduxProvider>
    </View>
  );
};

export default App;
