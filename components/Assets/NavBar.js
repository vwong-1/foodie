import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ModalDropdown from './ModalDropdown';

// //components

const NavBar = () => {

  return (
    <View style={styles.container} >
      <View style={styles.button}>
        <Text style={{color: '#333'}}>Sort By: </Text>
        <ModalDropdown
          defaultValue={'Average Rating'}
          options={['Average Rating', 'Most Reviews', 'Cheapest','Most Healthy', 'Most Quantity']}
          textStyle={styles.dropdown}
        />
      </View>
      <View style={styles.button}>
        <Text style={{color: '#333'}}>Filter: </Text>
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
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  dropdown: {
    fontSize: 14,
    color: '#444'
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
  }
});

export default NavBar;