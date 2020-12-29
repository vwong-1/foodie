import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductListItem = ({ product }) => {

  return (
    <View style={styles.container} >
      <Text>{product.food_name}</Text>
      <Text>{product.restaurant_name}</Text>
      <Text>{product.average_rating ? `${product.average_rating} ⭑(${product.rating_count})` : `0 ⭑(${product.rating_count})`}</Text>
      <Text>{product.price === '0.00' ? 'unknown' : `$${product.price}`}</Text>
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
});

export default ProductListItem;