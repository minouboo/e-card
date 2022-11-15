import { StyleSheet, TextInput, View, Text } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, inputTitle}) => {
  return (
    <View style = {styles.container}>
      <Text
      style = {styles.inputTitle}
      >{inputTitle}</Text>
      <TextInput
      value = {value}
      onChangeText = {setValue}
      style = {styles.Input}
      secureTextEntry = {secureTextEntry}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        
        width: '90%',
        padding: 3,
        margin: 12,


    },

    Input: {
      color: 'grey',
      backgroundColor: 'white',
      borderRadius: 18,
      borderColor: '#5AADB2',
      borderwidth: 2,
      height: 35,
      padding:9,
      borderStyle: 'solid',

    },

    inputTitle:{
        padding: 6,
        color:'#5AADB2',
        fontWeight: 'bold',
    },

})