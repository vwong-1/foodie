import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

//components
import ProductListItem from './ProductListItem';

const ProductList = ({ products }) => {

  const listItems = ({ item }) => <ProductListItem product={item} />;

  return (
    <View style = { styles.container } >
      <SafeAreaView>
        <FlatList data={products} renderItem={listItems} keyExtractor={item => item.food_id.toString()} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
    padding: 10,
  },
});

export default ProductList;