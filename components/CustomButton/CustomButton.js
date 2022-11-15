import {Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable 
        onPress={onPress} 
        style={[
          styles.container, 
          ]}>
      <Text 
        style={[
          styles.text, 
          ]}>{text}</Text>
    </Pressable>
  )
} 

const styles = StyleSheet.create({
  container: {
    
    width: '50%',
    padding: 15,
    marginVertical: 9,
    alignItems: 'center',
    borderRadius: 27,
    backgroundColor: '#5AADB2',

  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },


})

export default CustomButton