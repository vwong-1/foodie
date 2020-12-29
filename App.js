import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
// import ip from './ip';

//components
import Home from './components/Home';
import Search from './components/Search';
import SearchedView from './components/SearchedView';

const App = () => {
  const [searchResults, onSearch] = React.useState();

  const onSearchSubmit = (value) => {
    axios.get(`http://0c1f9b5fa12a.ngrok.io/foods?item=${value}`)
      .then(res => {
        onSearch(res.data);
      })
      .catch(e => alert(e));
  };

  let view = searchResults ? <SearchedView searchSubmit={onSearchSubmit} searchResults={searchResults} /> : <Home searchSubmit={onSearchSubmit} />

  return (
    <View style = { styles.container } >
      {view}
    </View>
  );
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
