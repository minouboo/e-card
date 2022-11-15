import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LogoMyECard from '../../assets/Image/LogoMyECard.png'
import CustomButton from '../../components/CustomButton/index'

export default function Connection(props) {
  return (
  <View >

    <View style={styles.up}>
      <Image 
        source={LogoMyECard} 
        style={[styles.logo]}
        resizeMode='contain'
        />

      <Text
      style={styles.slogan}>
        Your digital business card
        
      </Text>

    </View>

    <View style= {styles.root}>
      
      <CustomButton
      text="Sign In"
      onPress={() => {props.navigation.navigate('Sign in')}}
      />

      <CustomButton
      text="Sign Up"
      />
    
    </View>

    
    
  </View>

    
    
 
  )
}

const styles = StyleSheet.create({
  
    root:{
      alignItems: 'center',
      
    },
  
    logo: {
      width: '60%',
      maxwidth: 300,
      maxheight: 200,
      height:'70%',
      
    },
  
    slogan:{
      
      fontSize:18,
      justifyContent:"center",
      textAlign:"center",
      
      width:'70%'
      
      
    },
  
    up:{
      alignItems: 'center',
      
    }
  
   
  })