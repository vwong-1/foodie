import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import serverurl from '../../serverurl';
import axios from 'axios';

import burrito0 from '../..//assets/burrito1.png';
import burrito1 from '../../assets/burrito2.png';
import burrito2 from '../../assets/burrito3.png';
import burrito3 from '../../assets/burrito4.png';

const ProductListItem = ({ setProduct, switchView, product }) => {
  const burrito = [burrito0, burrito1, burrito2, burrito3]
  const onPress = () => {
    axios.get(`${serverurl}/ratings?id=${product.food_id}`)
      .then(res => {
        setProduct(res.data);
        switchView('ItemView');
      })
      .catch(e => alert(e));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.view}>
        <View style={styles.descriptionContainer}>
          <Text style={{ fontWeight: 'bold' }}>{product.food_name}</Text>
          <Text style={{ color: '#00203FFF' }}>{product.restaurant_name}</Text>
          <Text>{product.average_rating ? `${product.average_rating} ⭑(${product.rating_count})` : `0 ⭑(${product.rating_count})`}</Text>
          <Text>{product.price === '0.00' ? 'Unknown' : `$${product.price}`}</Text>
        </View>
        <View style={styles.photoContainer}>
          <Image
            source={burrito[product.food_id % 4]}
            style={{
              resizeMode: 'stretch',
              height: '100%',
              width: 'auto',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#ccc'
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    borderColor: '#ccc',
    borderTopWidth: 1,
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
  },
  descriptionContainer: {
    // borderWidth: 1,
    width: '75%'
  },
  photoContainer: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    height: 80,
    width: '25%',
    borderRadius: 5,
    overflow: 'hidden',
  }
});

export default ProductListItem;