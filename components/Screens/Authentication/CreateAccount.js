import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import CustomInput from '../../CustomInput'
import CustomButton from '../../CustomButton'

const CreateAccount = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.container}
      >

        <TouchableWithoutFeedback >
          <View style={styles.root}>
            
            
              <Text style = {styles.title}>
              Sign Up 
              </Text>
              
              <Text style = {styles.slogan}>
                Start now to get your digital business card everywhere, everytime.
              </Text>
            
              
              <CustomInput 
              inputTitle = "Email"
              placeholder = "Email"
              />

              <CustomInput 
              inputTitle = "Name"
              placeholder = "Name" 
              />

              <CustomInput 
              inputTitle = "Password"
              placeholder = "Password" 
              secureTextEntry={true}
              />

              <CustomInput 
              inputTitle = "Confirm your password"
              placeholder = "Confirm your password" 
              secureTextEntry={true}
              />

              <CustomButton
              text = "Sign Up"
              onPress={() => {props.navigation.navigate('CreationECard')}}
              />

          </View>
          
        </TouchableWithoutFeedback>
          

      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
    },
  
    root: {
      padding: 24,
      flex: 1,
      alignItems: 'center',
  
    },
  
    title: {
      fontSize: 36,
      textAlign: "center",
      padding: 9,
      width: '70%',
      color: '#5AADB2',
      
    },
  
    slogan:{ 
      fontSize: 18,
      textAlign: "center",
      padding: 9,
      width: '70%',
    }, 
   
  })

export default CreateAccount