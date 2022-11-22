import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connection from './components/Screens/Authentication/Connection'
import Signin from './components/Screens/Authentication/Signin';
import CreationECard from './components/Screens/Authentication/CreationECard';
import CreateAccount from './components/Screens/Authentication/CreateAccount';
import HomePage from './components/Screens/E-card/HomePage';
import Footer from './components/Footer/Footer';
import Test from '../my-ecard/components/Screens/Test'


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
        <Stack.Screen
        name = "Create Account"
        component={CreateAccount}
        />
        <Stack.Screen
        name = "CreationECard"
        component={CreationECard}
        />
        <Stack.Screen
        name = "footer"
        component={Footer}
        />
        <Stack.Screen
        name = "test"
        component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


