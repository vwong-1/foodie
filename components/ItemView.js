import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

//components
import ActiveSearch from './ActiveSearch';
import ProductList from './SearchedView/ProductList';

const ItemView = ({ switchView, product }) => {
  const onPress = () => switchView('SearchedView');

  return (
    <View style = { styles.container } >
      <Button onPress={onPress} title="< Search" />
      <Text>Product Info</Text>
      <Text style = { styles.nav }>Nav Bar</Text>
      <Text>Reviews</Text>
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

export default ItemView;