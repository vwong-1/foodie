import React, { useState } from 'react';
import { Button, Alert, Modal, StyleSheet, Text, TouchableHighlight, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import StarRating from 'react-native-star-rating';

export default function WriteReview() {
  const [modalVisible, setModalVisible] = useState(false);
  const [taste, setTaste] = useState();
  const [quality, setQuality] = useState();
  const [presentation, setPresentation] = useState();
  const [value, setValue] = useState();
  const [healthy, setHealthy] = useState();
  const [quantity, setQuantity] = useState();
  const [reviewText, onChangeText] = useState('');
  const [recommended, setRecommended] = useState();

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
                <StarRating
                  maxStars={5}
                  rating={taste}
                  starSize={25}
                  buttonStyle={styles.stars}
                  containerStyle={styles.starsContainer}
                  fullStarColor='#3F72AF'
                  selectedStar={(rating) => setTaste(rating)}
                />
              </View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Quality:</Text>
                <StarRating
                  maxStars={5}
                  rating={quality}
                  starSize={25}
                  buttonStyle={styles.stars}
                  containerStyle={styles.starsContainer}
                  fullStarColor='#3F72AF'
                  selectedStar={(rating) => setQuality(rating)}
                />
              </View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Presentation:</Text>
                <StarRating
                  maxStars={5}
                  rating={presentation}
                  starSize={25}
                  buttonStyle={styles.stars}
                  containerStyle={styles.starsContainer}
                  fullStarColor='#3F72AF'
                  selectedStar={(rating) => setPresentation(rating)}
                />
              </View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Value:</Text>
                <StarRating
                  maxStars={5}
                  rating={value}
                  starSize={25}
                  buttonStyle={styles.stars}
                  containerStyle={styles.starsContainer}
                  fullStarColor='#3F72AF'
                  selectedStar={(rating) => setValue(rating)}
                />
              </View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Healthy:</Text>
                <StarRating
                  maxStars={5}
                  rating={healthy}
                  starSize={25}
                  buttonStyle={styles.stars}
                  containerStyle={styles.starsContainer}
                  fullStarColor='#3F72AF'
                  selectedStar={(rating) => setHealthy(rating)}
                />
              </View>
              <View style={styles.ratingStars}>
                <Text style={styles.modalText}>Quantity:</Text>
                <StarRating
                  maxStars={5}
                  rating={quantity}
                  starSize={25}
                  buttonStyle={styles.stars}
                  containerStyle={styles.starsContainer}
                  fullStarColor='#3F72AF'
                  selectedStar={(rating) => setQuantity(rating)}
                />
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
  starsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    top: '-15%',
    paddingRight: 20,
  },
  stars: {
    paddingRight:5
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
