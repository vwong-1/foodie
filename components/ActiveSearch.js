import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';

const Search = ({ returnHome, searched, searchSubmit }) => {
  const [value, onChangeText] = React.useState(`${searched}`);

  return (
    <View style={styles.container}>
      <Button onPress={returnHome} title="<" />
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={'Search for foods'}
        returnKeyType={'search'}
        clearButtonMode={'while-editing'}
        onSubmitEditing={() => searchSubmit(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    height: 40,
    paddingLeft: 10,
    width: '90%',
  },
});

export default Search;
