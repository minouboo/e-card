import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../../CustomInput'
import CustomButton from '../../../CustomButton'

const UpdateECard = () => {
  return (
    <KeyboardAvoidingView
    
    style={styles.container}
    >
      <ScrollView>

      <TouchableWithoutFeedback >
        <View style={styles.root}>
          
            <Text style = {styles.title}>
            Add your first E-card
            </Text>
            
            <CustomInput
            inputTitle = "First Name"
            placeholder = "First Name"
            />
            <CustomInput 
            inputTitle = "Last Name"
            placeholder = "Last Name"
            />
            <CustomInput 
            inputTitle = "Email"
            placeholder = "Email"
            />
            <CustomInput 
            inputTitle = "Phone Number"
            placeholder = "Phone Number"
            />
            <CustomInput 
            inputTitle = "Job Position"
            placeholder = "Job Position"
            />
            <CustomInput 
            inputTitle = "Company"
            placeholder = "Company"
            />
            
            
            
        </View>

        
        
      </TouchableWithoutFeedback>
        
      </ScrollView>
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
    justifyContent: "space-around",
    
    alignItems: 'center',

  },

  upSection:{
    alignItems: 'center',
    paddingTop: '30%',
   // backgroundColor: 'red',
  },

  downSection:{
    alignItems: 'center',  
    padding: 9,
    flex: 1,
    
   // backgroundColor: 'yellow',
  },

  title: {
    fontSize: 24,
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

export default UpdateECard