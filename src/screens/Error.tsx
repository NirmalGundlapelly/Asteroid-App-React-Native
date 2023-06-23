import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { horizontalScale, verticalScale } from '../dimensions/Matrice'
import CustomButton from '../components/CustomButton'

interface IProps{
    navigation?:any
}

interface IState{}

export default class Error extends Component<IProps, IState> {
  render() {
    return (
      <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center', height:verticalScale(500)}}>
        <Text style={{fontSize:20, width:horizontalScale(300), textAlign:'center'}}>Sorry, You have exceeded your rate limit...</Text>
        <CustomButton onPress={()=> this.props.navigation.navigate('Home')} customStyle={{width: verticalScale(150), marginTop:40}} text="Back to Home"/>
      </View>
    )
  }
}