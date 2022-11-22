import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProfilePic from '../Avatar/ProfilePic'

const Card = (props) => {
  return (
    <View style = {styles.card}>
          
          <View style = {styles.upcard}>
            <View>
                <ProfilePic/>
            </View>
            <View style = {styles.upcardinfo}>
                <View>
                <Text style = {styles.info}>First Name:</Text>
                <Text style = {styles.info}>Last Name:</Text>
                </View>
                <View>
                <Text style = {styles.info}>{props.firstname}</Text>
                <Text style = {styles.info}>{props.lastname}</Text>
                </View>
            </View>
          </View>
          
          <View style = {styles.downcard}>
          <Text style = {styles.info}>Job postion:</Text>
          <Text style = {styles.info}>{props.jobposition}</Text>
          </View>
          <View style = {styles.downcard}>
          <Text style = {styles.info}>Email:</Text>
          <Text style = {styles.info}>{props.email}</Text>
          </View>
          <View style = {styles.downcard}>
          <Text style = {styles.info}>Phone:</Text>
          <Text style = {styles.info}>{props.phonenumber}</Text>
          </View>
          <View style = {styles.downcard}>
          <Text style = {styles.info}>Company:</Text>
          <Text style = {styles.info}>{props.company}</Text>
          </View>
      
        </View>
  )
}


const styles = StyleSheet.create({
  
    

    info :{
      fontSize: 15,
      color: '#5AADB2',
      padding: 3,
      
    },
    
    upcard : {
      flexDirection: 'row',
      display:'flex',
    },

    upcardinfo :{
      flexDirection: 'row',
      width:'80%',
      paddingLeft: '5%',
      
    },
  
    downcard : {
      flexDirection: 'row',
      paddingLeft: '7%',
    },
  
    card: {
      
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#5AADB2',
      width: '80%',
      height: '55%',
      justifyContent: 'center',
      paddingBottom: '3%',
      paddingTop: '3%',
     
  
    },
  
  })
export default Card