import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import LogoMyECard from '../../../assets/Image/LogoMyECard.png'
import CustomInput from '../../CustomInput' 
import CustomButton from '../../CustomButton'

const Signin = (props) => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style = {styles.upSection}>
        <Image
         source = {LogoMyECard}
         style = {[styles.logo]}
         />
         <Text
          style = {styles.slogan}>
            Your digital business card
          </Text>
      </View>

      <View style = {styles.downSection}>
    <CustomInput 
        inputTitle = "Email"
        placeholder = "Email" 
        />

     <CustomInput 
        inputTitle = "Password"
        placeholder = "Password" 
        
        />

      <CustomButton
      text="Sign In"
      />
    
    </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    
    padding: 9,
  },

  upSection:{
    alignItems: 'center',
    //flex: 2,
    //backgroundColor: 'red',
  },

  logo: {
    width: 200,
    height: 200,
    maxwidth: 300,
    maxheight: 300,
  },

  slogan:{ 
    fontSize: 18,
    textAlign: "center",
   
    width: '70%',
  },

  downSection:{
    alignItems: 'center',
  },

})

export default Signin