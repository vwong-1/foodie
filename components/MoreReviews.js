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

  const onSubmit = () => {
    if (!taste || !quality || !presentation || !value || !reviewText) {
      alert('Please fill out all required fields.')
      return;
    }
    let overall_rating = (taste*0.7 + quality*0.125 + presentation*0.05 + value*0.125);
    let review = {
      taste,
      quality,
      presentation,
      value,
      healthy: healthy ? healthy : null,
      quantity: quantity ? quantity : null,
      text: reviewText,
      recommended: recommended ? recommended : null,
      overall_rating
    }
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
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
                <Text style={styles.modalText}>Taste:*</Text>
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
                <Text style={styles.modalText}>Quality:*</Text>
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
                <Text style={styles.modalText}>Presentation:*</Text>
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
                <Text style={styles.modalText}>Value:*</Text>
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
                <Text style={styles.modalText}>Review:*</Text>
                <TextInput
                  style={styles.reviewInput}
                  multiline={true}
                  maxLength={2000}
                  value={reviewText}
                  onChangeText={text => onChangeText(text)}
                />
              </View>
              <View style={styles.recommended}>
                <Text style={styles.modalText}>Recommend?</Text>
                <View style={styles.recommendButtonContainer}>
                  <View style={{...styles.recommendButton, backgroundColor: recommended ? '#3F72AF' : null, borderRightWidth: 1, borderColor: '#999'}}>
                    <Button
                      title={'Yes'}
                      activeOpacity={1}
                      onPress={() => {
                        if (recommended === true) {
                          setRecommended(undefined);
                        } else {
                          setRecommended(true);
                        }
                      }}
                      color={recommended ? '#fff' : '#007AFF'}
                    />
                  </View>
                  <View style={{...styles.recommendButton, backgroundColor: recommended === false ? '#3F72AF' : null}}>
                    <Button
                      title={'No'}
                      onPress={() => {
                        if (recommended === false) {
                          setRecommended(undefined);
                        } else {
                          setRecommended(false);
                        }
                      }}
                      color={recommended === false ? '#fff' : '#007AFF'}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.submit}>
              <TouchableHighlight
                style={{...styles.openButton, height: 35}}
                onPress={() => {
                  onSubmit();
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
        <Text style={styles.textStyle}>See more reveiws</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
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
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    height: '90%',
    top: '2%',
    borderWidth: 1,
    borderColor: '#aaa'
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
    paddingRight: 15,
  },
  stars: {
    paddingRight:5
  },
  openButton: {
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.85,
  },
  textStyle: {
    color: '#000',
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
    top: '1%',
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
    height: '90%',
    width: '100%',
    marginTop: -5,
    justifyContent: 'flex-start',
  },
  recommended: {
    marginTop: 15,
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  recommendButtonContainer: {
    flex: 1,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    top: '-25%',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#999'
  },
  recommendButton : {
    width: '50%',
  }
});
