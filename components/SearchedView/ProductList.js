import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

//components
import ProductListItem from './ProductListItem';

const ProductList = ({ products }) => {

  const listItems = ({ item }) => <ProductListItem product={item} />;

  return (
    <SafeAreaView style = { styles.container } >
      <FlatList data={products} renderItem={listItems} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
});

export default ProductList;