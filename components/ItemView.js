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
      <View style={styles.reviewTitleContainer}>
        <Text style={styles.reviewTitle}>Reviews</Text>
        <View style={styles.buttonContainer}>
          <WriteReview />
        </View>
      </View>
      <View style={styles.reviewsContainer}>

      </View>
      {/* <View style={styles.buttonContainer}>
        <WriteReview />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
    width: '100%',
    alignItems: 'center',
    height: '97%',
  },
  productContainer: {
    display: 'flex',
    width: '90%',
    // borderWidth: 1,
    // alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    marginBottom: 2,
    alignItems: 'flex-start'
  },
  nav: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    width: '90%',
    textAlign: 'center',
  },
  reviewTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between'
  },
  reviewTitle: {
    fontSize: 20,
  },
  reviewsContainer: {
    width: '90%',
    height: '55%',
    marginTop: 10,
    borderWidth: 1,
  },
  buttonContainer: {
    height: '150%',
    alignSelf: 'center',
  }
});

export default ItemView;