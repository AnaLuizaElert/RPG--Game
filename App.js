import * as React from 'react';
import Home from './component/Home/home';
import Game from './component/Game/game';
import Test from './component/Test/test';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
         name='Game' 
         component={Game} 
         options={{
          title: "Pense",
          headerStyle: {
            backgroundColor: "purple"
          },
          headerTintColor: "white"
         }}
         />
        <Stack.Screen
         name='Home'
         component={Home}
         options={{
          title: "Bem-vindo",
          headerStyle: {
            backgroundColor: "purple"
          },
          headerTintColor: "white"
         }}
        />
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;