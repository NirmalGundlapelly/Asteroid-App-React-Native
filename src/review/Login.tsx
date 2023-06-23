import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {Component} from 'react';
import CustomInput from '../components/CustomInput';

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../dimensions/Matrice';
import CustomButton from '../components/CustomButton';

interface IProps {
    navigation?:any
}

interface IState {}

export default class Login extends Component<IProps, IState> {

  handle = () => {}

  render() {
    return (
      <View>
        <View style={styles.loginContainer}>
          <View>
            <Text style={styles.loginText}>Login</Text>
            <CustomInput placeholder="Username" customInput={styles.input} />
            <CustomInput placeholder="Password" customInput={styles.input} />
            <CustomButton onPress={this.handle} customStyle={styles.loginButton} text="Login" />
            <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Register')}>
              <Text style={styles.dontHave}>
                Don't have an account?{' '}
                <Text style={styles.registerText}>Register.</Text>
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    height: verticalScale(270),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: '#e0e0e0',
    margin: moderateScale(20),
    marginTop:moderateScale(80),
    borderRadius: moderateScale(10),
  },
  loginText: {
    marginBottom: verticalScale(10),
    fontSize: moderateScale(20),
  },
  input: {
    borderColor:'#a39f9e'
  },
  loginButton: {},
  registerText: {
    color: '#032b4d',
  },
  dontHave: {
    marginTop: verticalScale(10),
  },
});
