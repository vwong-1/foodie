import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Keyboard, TouchableOpacity } from 'react-native';

//components
import Search from './Assets/Search';
import logo from '../assets/foodie.jpg'

const Home = ({ searchSubmit }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Keyboard.dismiss()} style={styles.view} activeOpacity={1} >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Foodie!</Text>
        </View>
        <ImageBackground source={logo} style={styles.logo} />
        <View style={styles.search}>
          <Search searchSubmit={searchSubmit} />
        </View>
        <View style={styles.recentlySearchedContainer}>
          <Text style={{ fontSize: 15 }}>Recently Searched:</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  title: {
    fontSize: 40,
    textAlign: 'center'
  },
  search: {
    flex: 1,
    justifyContent: 'center',
  },
  recentlySearchedContainer: {
    flex: 3,
  },
  logo: {
    flex: 3,
    width: '100%',
    resizeMode: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  view: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    alignItems: 'center',
  }
});

export default Home;