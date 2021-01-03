import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

//components
import WriteReview from './WriteReview';
import ActiveSearch from './Assets/ActiveSearch';
import ProductList from './SearchedView/ProductList';

const ItemView = ({ switchView, productInfo }) => {
  const onPress = () => switchView('SearchedView');

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button onPress={onPress} title="< Search" />
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.title}>ITEM:</Text>
        <Text>{productInfo[0].food_name}</Text>
        <Text style={styles.title}>RESTAURANT:</Text>
        <Text>{productInfo[0].restaurant_name}</Text>
        <Text style={styles.title}>DESCRIPTION:</Text>
        <Text>{productInfo[0].food_description ? productInfo[0].food_description : 'No Description'}</Text>
        <Text style={styles.title}>PRICE:</Text>
        <Text>{productInfo[0].price ? `$${productInfo[0].price}` : 'Unknown'}</Text>
        <Text style={styles.title}>AVERAGE RATINGS:</Text>
        <Text>{productInfo[0].average_ratings ? productInfo[0].average_ratings : 'Not Yet Rated'}</Text>
      </View>
      <Text style={styles.nav}>Nav Bar</Text>
      <Text>Reviews</Text>
      <WriteReview />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    width: '100%',
    alignItems: 'center',
    height: '100%',
  },
  productContainer: {
    display: 'flex',
    width: '90%',
    // alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'flex-start'
  },
  nav: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    width: '90%',
    textAlign: 'center',
  }
});

export default ItemView;