import React, { useState } from 'react';
import { Button, Alert, Modal, StyleSheet, Text, TouchableHighlight, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

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
          <TouchableOpacity onPress={() => Keyboard.dismiss()} style={styles.view} activeOpacity={1} >
          <View style={styles.modalView}>
            <View style={styles.xButton}>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                title="x" />
            </View>
            <View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Taste:</Text>
              </View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Quality:</Text>
              </View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Presentation:</Text>
              </View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Value:</Text>
              </View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Healthy:</Text>
              </View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Quantity:</Text>
              </View>
              <View style={styles.review}>
                <Text style={styles.modalText}>Review:</Text>
                <TextInput
                  style={styles.reviewInput}
                  multiline={true}
                  maxLength={2000}
                />
              </View>
              <View style={styles.recommended}>
                <Text style={styles.modalText}>Recommend?</Text>
                <Text> Yes / No</Text>
              </View>
            </View>
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
          </TouchableOpacity>
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
  view: {
    width: '100%',
    height: '100%',
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
    // borderWidth: 1,
    // display: 'none',
    top: '-5%',
    left: '-7.5%',
  },
  submit: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  ratingStars: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
  },
  review: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '40%',
    paddingBottom: 12,
  },
  reviewInput: {
    borderWidth: 1,
    height: '85%',
    width: '100%',
    marginTop: -5,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  recommended: {
    marginTop: 5,
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row'
  },
});