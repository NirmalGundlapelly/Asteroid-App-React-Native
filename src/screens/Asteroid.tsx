import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import { verticalScale } from '../dimensions/Matrice';

interface IProps {
  navigation?: any;
  route?:any
}

interface IState {}

export default class Asteroid extends Component<IProps, IState> {
  render() {
    const item = this.props.route.params
    console.log(item)
   
    return (
      <View style={styles.asteroidContainer}>
          <View style={styles.resultsContainer}>
            <Text style={{color:'black', fontSize:20}}>Asteroid Details</Text>
            <View style={styles.resultCard}>
              <Text style={{color:'#d9d7d7', }}>Name :</Text>
              <Text style={{color:'white', paddingBottom:10}}>{item.name}</Text>
              <Text style={{color:'#d9d7d7',}}>NASA JPL URL :</Text>
              <Text style={{color:'white',  paddingBottom:10}}>{item.nasaJplUrl}</Text>
              <Text style={{color:'#d9d7d7', }}>Is Potential :</Text>
              <Text style={{color:'white'}}>{item.isPotential != undefined ? item.isPotential? 'True':
              'False': null}</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    height:verticalScale(500)
  },
  searchResultText: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 20,
    color: '#bfbeba',
  },
  resultCard: {
    backgroundColor: '#0067a3',
    width: '95%',
    elevation: 20,
    height: 200,
    borderRadius: 10,
    margin: 10,
    padding:15
  },
  asteroidContainer:{}
});
