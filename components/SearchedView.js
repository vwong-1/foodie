import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

//components
import Search from './Search';
import ProductList from './SearchedView/ProductList';

const SearchedView = ({ searchSubmit, searchResults }) => {

  return (
    <View style = { styles.container } >
      <Search searchSubmit = { searchSubmit } />
      <ProductList products = { searchResults } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    width: '100%',
    alignItems: 'center',
  },
});

export default SearchedView;