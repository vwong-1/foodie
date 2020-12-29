import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductListItem = ({ product }) => {

  return (
    <View style={styles.container} >
      <Text>{product.food_name}</Text>
      <Text>{product.food_description}</Text>
      <Text>{product.restaurant_name}</Text>
      <Text>{product.average_rating}</Text>
      <Text>{product.price === '0.00' ? 'unknown' : product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
});

export default ProductListItem;