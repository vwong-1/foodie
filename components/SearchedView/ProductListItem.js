import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import serverurl from '../../serverurl';
import axios from 'axios';

const ProductListItem = ({ setProduct, switchView, product }) => {
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
        <Text>{product.food_name}</Text>
        <Text>{product.restaurant_name}</Text>
        <Text>{product.average_rating ? `${product.average_rating} ⭑(${product.rating_count})` : `0 ⭑(${product.rating_count})`}</Text>
        <Text>{product.price === '0.00' ? 'unknown' : `$${product.price}`}</Text>
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
    width: '100%',
    alignItems: 'center',
  }
});

export default ProductListItem;