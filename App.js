import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import axios from 'axios';
import ip from './ip';

//components
import Search from './components/Search.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(value) {
    axios.get(`http://87d1b1ada521.ngrok.io/foods?item=${value}`)
      .then(res => {
        console.log(res.data);
        alert('success!')
      })
      .catch(e => alert(e));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Foodie!</Text>
        <Search searchSubmit={this.onSearchSubmit}/>
        <StatusBar style="auto" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
