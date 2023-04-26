import * as React from 'react';
import Game from './component/game/game';
import Home from './component/home/home';
import TextFinal from './component/finalText/finalText';
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
            backgroundColor: "#566637"
          },
          headerTintColor: "white"
         }}
         />
        <Stack.Screen
         name='Home'
         component={Home}
         options={{
          title: "Welcome",
          headerStyle: {
            backgroundColor: "#566637"
          },
          headerTintColor: "white"
         }}
        />
        <Stack.Screen
         name='TextFinal'
         component={TextFinal}
         options={{
          title: "The end",
          headerStyle: {
            backgroundColor: "#566637"
          },
          headerTintColor: "white"
         }}
        />
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;