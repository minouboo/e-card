import { View, Text, Image, StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import LogoMyECard from '../../../assets/Image/LogoMyECard.png'
import CustomButton from '../../CustomButton/index'

export default function Connection(props) {
  return (
  <SafeAreaView>

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

    <View style= {styles.buttonbox}>
      
      <CustomButton
      text="Sign In"
      onPress={() => {props.navigation.navigate('footer')}}
      />

      <CustomButton
      text="Sign Up"
      onPress={() => {props.navigation.navigate('CreationECard')}}
      />

      <CustomButton
      text="test"
      onPress={() => {props.navigation.navigate('test')}}
      />


    
    </View>

    
    
  </SafeAreaView>

    
    
 
  )
}

const styles = StyleSheet.create({
  
    buttonbox:{
      alignItems: 'center',
      height:'40%',
      paddingBottom: 19,
      

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
      height:'60%',
    }
  
   
  })