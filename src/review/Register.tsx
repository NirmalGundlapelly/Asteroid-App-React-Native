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
  navigation?: any;
}

interface IState {}

export default class Registered extends Component<IProps, IState> {

  handle = () => {}
  render() {
    return (
      <View>
        <View style={styles.loginContainer}>
          <View>
            <Text style={styles.loginText}>Register</Text>
            <CustomInput placeholder="First Name"  customInput={styles.input} />
            <CustomInput placeholder="Last Name" customInput={styles.input} />
            <CustomInput placeholder="Email" customInput={styles.input} />
            <CustomInput placeholder="Password" customInput={styles.input} />
            <CustomButton onPress={this.handle} customStyle={styles.loginButton} text="Register" />
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.dontHave}>
                Already have an account?
                <Text style={styles.registerText}> Login</Text>
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
    height: verticalScale(350),
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
    marginTop:verticalScale(10),
    fontSize: moderateScale(20),
  },
  input: {
    borderColor:'#a39f9e'
  },
  loginButton: {
    backgroundColor:'green'
  },
  registerText: {
    color: '#032b4d',
  },
  dontHave: {
    marginTop: verticalScale(10),
  },
});
