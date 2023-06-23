import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { moderateScale, verticalScale } from '../dimensions/Matrice'

interface IProps{
    text: string
    customStyle:object
    onPress:any
}

interface IState{}


export default class CustomButton extends Component<IProps, IState> {
  render() {
    const {text, customStyle, onPress} = this.props
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, customStyle]}><Text style={styles.buttonText}>{text}</Text></TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#032b4d',
        width:verticalScale(100),
        paddingVertical:moderateScale(5),
        paddingHorizontal:moderateScale(5),
        borderRadius:moderateScale(5),
        marginTop:verticalScale(5)
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    }
})