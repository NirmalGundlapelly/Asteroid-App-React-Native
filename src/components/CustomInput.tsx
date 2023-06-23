import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import { horizontalScale, verticalScale, moderateScale } from '../dimensions/Matrice'

interface IProps{
    placeholder:string
    customInput:object
}
 

interface IState{}


export default class CustomInput extends Component<IProps, IState> {
  render() {
    const {placeholder, customInput} = this.props
    return (
      <TextInput placeholder={placeholder} style={[styles.input, customInput]}/>
    )
  }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: horizontalScale(300),
        height: verticalScale(40),
        borderRadius: moderateScale(5),
        marginBottom: verticalScale(5),
        paddingHorizontal:horizontalScale(10)
      },
})