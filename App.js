import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connection from './components/Screens/Connection'
import Signin from './components/Screens/Signin';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Connection"
        component={Connection}
        />
        <Stack.Screen
        name = "Sign in"
        component={Signin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


