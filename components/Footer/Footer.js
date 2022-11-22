import { StyleSheet, Image, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import HomePage from '../Screens/E-card/HomePage'
import ContactPage from '../Screens/E-card/ContactPage/ContactPage'
import UpdateCard from '../Screens/E-card/CreationECard/UpdateEcard'


const Tab = createMaterialBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator 
    initialRouteName='HomePage'
    labeled = {false}
    shifting = {false}
    barStyle={{ 
      backgroundColor: '#5AADB2',
      position: 'absolute',
      height: '10%',
      borderRadius: 30,
      
      
      }}>
        
        <Tab.Screen 
        name="ContactPage" 
        component={ContactPage} 
        color = 'white'
        options={{ 
          tabBarIcon: () => (
          <View style = {styles.labelbox}>
          <MaterialCommunityIcons name='account-group' size={36} color='white'/>
          <Text style = {styles.label}>Scan</Text>
          </View>
          ),
           }} />

        <Tab.Screen 
        name="Scan" 
        component={ContactPage} 
        color = 'white'
        options={{ 
          tabBarIcon: () => (
          <View style = {styles.labelbox}>
          <MaterialCommunityIcons name='qrcode-scan' size={36} color='white'/>
          <Text style = {styles.label}>Scan</Text>
          </View>
          ),
           }} />
        
        <Tab.Screen 
        name="My E-card" 
        component={HomePage} 
        color = 'white'
        options={{ 
          tabBarIcon: () => (
          <View style = {styles.labelbox}>
          <MaterialCommunityIcons name='card-account-details-outline' size={36} color='white'/>
          <Text style = {styles.label}>My E-card</Text>
          </View>
          ),
           }} />

        
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({

  labelbox : {
    
    height: '180%',
    width: '230%',
    alignItems:'center',
    justifyContent: 'center',
   
    paddingBottom: 15,

    
  },


  icons: {
  width: 40,
  height: 40,
  
  },

  label: {
    color: "#ffffff",
    fontSize : 15,
    alignItems:'center',
    justifyContent:'center'
  }

})

export default Footer