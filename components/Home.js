import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//components
import Search from './Assets/Search';

const Home = ({ searchSubmit }) => {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Foodie!</Text>
      </View>
      <View style={styles.search}>
        <Search searchSubmit={searchSubmit} />
      </View>
      <View style={styles.recentlySearchedContainer}>
        <Text style={{fontSize: 15}}>Recently Searched:</Text>
      </View>
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
  },
  title: {
    fontSize: 50,
  },
  search: {
    flex: 1,
    justifyContent: 'center',
  },
  recentlySearchedContainer: {
    flex: 5,
  }
});

export default Home;