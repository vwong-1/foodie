import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductListItem = ({ product }) => {

  return (
    <View style = { styles.container } >
      product
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