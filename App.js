import * as React from 'react';
import Home from './component/Home/home';
import Game from './component/Game/game';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();


  // const [loaded] = useFonts({
  //   Oval: require('./assets/fonts/NovaOval-Regular.ttf')
  // });

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
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;