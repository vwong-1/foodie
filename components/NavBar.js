import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ModalDropdown from './ModalDropdown';

// //components

const NavBar = () => {

  return (
    <View style={styles.container} >
      <View style={styles.button}>
        <Text>Sort By: </Text>
        <ModalDropdown
          defaultValue={'Average Rating'}
          options={['Average Rating', 'Most Reviews', 'Cheapest','Most Healthy', 'Most Quantity']}
          textStyle={styles.dropdown}
        />
      </View>
      <View style={styles.button}>
        <Text>Filter: </Text>
        <ModalDropdown
          defaultValue={'Select Filters'}
          options={['$', '$$', '$$$', '$$$$', 'Clear Filters']}
          textStyle={styles.dropdown}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    width: '90%',
    justifyContent: 'center',
    borderWidth: 1,
  },
  dropdown: {
    fontSize: 14,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  }
});

export default NavBar;