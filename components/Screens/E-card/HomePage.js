import { View, Text,StyleSheet, KeyboardAvoidingView, Image } from 'react-native'
import React from 'react'
import Card from '../../Card/Card'
import ProfilePic from '../../Avatar/ProfilePic'

const HomePage = () => {
  return (

    <KeyboardAvoidingView>
      <View style = {styles.container}>
      
        <Text style = {styles.title}>My First e-card</Text>
        
        <Card
        firstname = "John"
        lastname = "Doe" 
        email = "john@doe.com"
        jobposition = "Sales"
        company = "My e-Card"
        phonenumber = "+33(0)638492043"
        />
        
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

  container: {
    
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  pic: {
    width: '10%',
    height:'100%',
  },

  title: {
    fontSize: 30,
    textAlign:'center',
    color: '#5AADB2',
    padding: 15,
    
  },

  info :{
    fontSize: 15,
    color: '#5AADB2',
    padding: 3,
  },
  
  upcard : {
    flexDirection: 'row'
  },

  downcard : {
    flexDirection: 'row'
  },

  card: {
    
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#5AADB2',
    backgroundColor: 'yellow',
    width: '80%',
    height: '50%',
    justifyContent: 'center',

  },

})

export default HomePage