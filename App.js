import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import serverurl from './serverurl';

//components
import Home from './components/Home';
import SearchedView from './components/SearchedView';
import ItemView from './components/ItemView'

const App = () => {
  const [searchResults, setResults] = React.useState();
  const [viewMode, switchView] = React.useState('Home');
  const [searched, setSearched] = React.useState();
  const [productInfo, setProduct] = React.useState();

  const onSearchSubmit = (value) => {
    if (!value.length) {
      return;
    }
    axios.get(`${serverurl}/foods?item=${value}`)
      .then(res => {
        setResults(res.data);
        setSearched(value);
        switchView('SearchedView');
      })
      .catch(e => alert(e));
  };

  const returnHome = () => {
    setResults(null);
    setSearched(null);
    switchView('Home');
  }

  let view;
  switch (viewMode) {
    case 'Home':
      view = <Home searchSubmit={onSearchSubmit} />;
      break;
    case 'SearchedView':
      view = <SearchedView searched={searched} searchSubmit={onSearchSubmit} searchResults={searchResults} returnHome={returnHome} switchView={switchView} setProduct={setProduct} />;
      break;
    case 'ItemView':
      view = <ItemView switchView={switchView} productInfo={productInfo} />
      break;
    default:
      view = <Home searchSubmit={onSearchSubmit} />;
  }

  return (
    <View style={styles.container} >
      <StatusBar />
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
