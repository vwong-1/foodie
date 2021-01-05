import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

//components
import WriteReview from './WriteReview';
import MoreReviews from './MoreReviews';
import ActiveSearch from './Assets/ActiveSearch';
import ProductList from './SearchedView/ProductList';
import burrito0 from '..//assets/burrito1.png';
import burrito1 from '../assets/burrito2.png';
import burrito2 from '../assets/burrito3.png';
import burrito3 from '../assets/burrito4.png';

const ItemView = ({ switchView, productInfo }) => {
  const burrito = [burrito0, burrito1, burrito2, burrito3];
  const onPress = () => switchView('SearchedView');

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button onPress={onPress} title="< Search" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.photoContainer}>
          <Image
            source={burrito[productInfo[0].food_id % 4]}
            style={{
              height: 300,
              width: '100%',
            }}
          />
        </View>
        <View style={styles.productContainer}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{productInfo[0].food_name}</Text>
          <Text style={{ fontSize: 15, color: '#00203FFF', fontWeight: 'bold', marginBottom: 5 }}>{productInfo[0].restaurant_name}</Text>
          <Text>{productInfo[0].full_address ? productInfo[0].full_address : 'N/A'}</Text>
          <Text style={styles.title}>DESCRIPTION:</Text>
          <Text>{productInfo[0].food_description ? productInfo[0].food_description : 'No Description'}</Text>
          <Text style={styles.title}>PRICE:</Text>
          <Text>{productInfo[0].price === '0.00' ? 'Unknown' : `$${productInfo[0].price}`}</Text>
          <Text style={styles.title}>AVERAGE RATINGS:</Text>
          <Text>{productInfo[0].average_ratings ? productInfo[0].average_ratings : 'Not Yet Rated'}</Text>
        </View>
        <View style={styles.reviewTitleContainer}>
          <Text style={styles.reviewTitle}>Reviews</Text>
          <View style={styles.buttonContainer}>
            <WriteReview id={productInfo.food_id} />
          </View>
        </View>
        <View style={styles.reviewsContainer}>
        </View>
        <MoreReviews id={productInfo.food_id} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '3%',
    paddingBottom: '1%',
  },
  scrollContainer: {
    // flex: 1,
    paddingBottom: '200%'
  },
  productContainer: {
    display: 'flex',
    width: '90%',
    alignSelf: 'center',
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
    borderRadius: 10,
    borderColor: '#999',
    width: '90%',
    textAlign: 'center',
  },
  reviewTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 10,
    alignSelf: 'center'
  },
  reviewTitle: {
    fontSize: 20,
  },
  reviewsContainer: {
    width: '90%',
    height: '100%',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    alignSelf: 'center',
  },
  buttonContainer: {
    height: '150%',
    alignSelf: 'center',
  },
  photoContainer: {
    width: '100%',
    marginBottom: 10,
  }
});

export default ItemView;