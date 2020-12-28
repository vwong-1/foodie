import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//components
import ProductListItem from './SearchedView/ProductListItem';

const ProductList = ({ products }) => {

  const listItems = products.map((product) => {
    <ProductListItem key={product.food_id} product={product} />
  });

  return (
    <View style = { styles.container } >
      {listItems}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
});

export default ProductList;