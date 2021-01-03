import React, { useState } from 'react';
import { Button, Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function WriteReview() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.xButton}>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                title="x" />
            </View>
            <Text style={styles.modalText}>Hello World!</Text>
            <View style={styles.submit}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#3F72AF' }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Write a Review</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    display: 'flex',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: '90%',
  },
  openButton: {
    backgroundColor: '#00ADB5',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  xButton: {
    alignItems: 'flex-start',
    // display: 'none',
    // top: '-100%',
  },
  submit: {
    flex: 1,
    justifyContent: 'flex-end',
  }
});