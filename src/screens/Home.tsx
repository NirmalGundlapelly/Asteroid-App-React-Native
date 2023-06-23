import {
  Alert,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {horizontalScale, verticalScale} from '../dimensions/Matrice';
const {height, width} = Dimensions.get('window');

interface IProps {
  navigation?: any;
}

interface IState {
  asteroidId: string;
  name: string;
  nasaJplUrl: string;
  isPotential: string;
  isFetching: boolean;
}

export default class Home extends Component<IProps, IState> {
  constructor(props:{}) {
    super(props);
    this.state = {
      asteroidId: '',
      name: '',
      nasaJplUrl: '',
      isPotential: '',
      isFetching: false,
    };
  }

componentDidMount(): void {
  const unsubscribe = this.props.navigation.addListener('focus', () => {
    // The screen is focused
    // Call any action
    if (this.state.asteroidId != ""){
      this.setState({isFetching:false})
    }
  });

  // Return the function to unsubscribe from the event so it gets removed on unmount
  return unsubscribe;
  
}

  handleGetAsteroid = async () => {
    if (this.state.asteroidId !== '') {
      this.setState({isFetching: true});
      const {asteroidId} = this.state;
      const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=QVDoXfHfkr6x28db1WdtNhdntkbwFZ9rO9eWdino`;
      await fetch(url)
        .then(response => response.json())
        .then(response => {
          console.log(response)
            this.setState({
              name: response.name,
              nasaJplUrl: response.nasa_jpl_url,
              isPotential: response.is_potentially_hazardous_asteroid,
              asteroidId: '',
              isFetching: false,
            });
            const item = {
              name: this.state.name,
              nasaJplUrl: this.state.nasaJplUrl,
              isPotential: this.state.isPotential,
            };
            this.props.navigation.navigate('Asteroid', item);
          
        })
        .catch(error => {
          Alert.alert(`${error}`);
          this.setState({isFetching: false});
          console.log(error);
        });
    }
  };

  handleRandomButton = async () => {
    this.setState({isFetching: true});
    const number = Math.ceil(Math.random() * 10);
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=QVDoXfHfkr6x28db1WdtNhdntkbwFZ9rO9eWdino`;
    await fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          asteroidId: response.near_earth_objects[number].id,
          isFetching: false,
        });
      })
      .catch(error => {
        Alert.alert('Invalid ID');
        this.setState({isFetching: false});
      });
  };

  render() {
    const {name, isFetching} = this.state;
    console.log(name);
    return (
      <View>
        <StatusBar backgroundColor={'#0067a3'} />
        <View style={styles.statusBarContainer}>
          <Text style={styles.asteroidText}>Asteroid App</Text>
        </View>
        {isFetching ? (
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              textAlign: 'center',
              position: 'absolute',
              top: verticalScale(150),
              left: horizontalScale(140),
            }}>
            Please wait...
          </Text>
        ) : null}
        <View style={styles.inputContainer}>
          <View style={{width: 250}}>
            <Text style={{marginBottom: 5}}>Search :</Text>
          </View>

          <TextInput
            value={this.state.asteroidId}
            onChangeText={text => this.setState({asteroidId: text})}
            placeholder="Enter Asteroid ID"
            style={styles.input}
          />
          <TouchableOpacity
            disabled={this.state.asteroidId.length < 1}
            onPress={this.handleGetAsteroid}
            style={{
              ...styles.submitButton,
              backgroundColor:
                this.state.asteroidId.length > 0 ? '#0067a3' : '#7a7473',
            }}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleRandomButton}
            style={[styles.submitButton, styles.randomButton]}>
            <Text style={styles.buttonText}>Random Asteroid</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarContainer: {
    height: 50,
    backgroundColor: '#0067a3',
  },
  asteroidText: {
    color: '#ebf0f2',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
  input: {
    borderColor: '#a8afb3',
    borderWidth: 1,
    width: 250,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    height: verticalScale(500),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  randomButton: {
    backgroundColor: '#a38905',
  },
  buttonText: {
    color: '#f5f7f7',
  },
});
