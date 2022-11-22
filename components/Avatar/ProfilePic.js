import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProfileTest from '../../assets/Image/ProfileTest.png';
import { Avatar } from 'react-native-paper';

const ProfilePic = () => {
  return (
    <View style = {styles.pic}>
    <Avatar.Image 
    size={48} 
    source={ProfileTest} 
     />
    </View>
)
}

const styles =StyleSheet.create({
  pic : {
    padding: 9,
  },
})

export default ProfilePic