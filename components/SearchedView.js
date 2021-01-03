import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

//components
import ActiveSearch from './Assets/ActiveSearch';
import ProductList from './SearchedView/ProductList';
import NavBar from './Assets/NavBar';

const SearchedView = ({ setProduct, returnHome, searched, searchSubmit, searchResults, switchView }) => {

  return (
    <View style = { styles.container } >
      <ActiveSearch searchSubmit={ searchSubmit } searched={searched} returnHome={returnHome}/>
      <NavBar style = { styles.nav } />
      <ProductList switchView={switchView} products={searchResults} setProduct={setProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    width: '100%',
    alignItems: 'center',
  },
  nav: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    width: '90%',
    textAlign: 'center',
  }
});

export default SearchedView;