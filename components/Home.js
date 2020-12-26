import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//components
import Search from './Search';

const Home = ({ searchSubmit }) => {

  return (
    <View style = { styles.container } >
      <Text>Foodie!</Text>
      <Search searchSubmit={ searchSubmit }/>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
});

export default Home;