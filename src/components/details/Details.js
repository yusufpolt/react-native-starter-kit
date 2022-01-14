import React from 'react';
import styles from './Details.style';
import {Image, SafeAreaView, Text} from 'react-native';

const Details = ({route}) => {
  const {id} = route.params;
  console.log(id);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={null} style={styles.image} />
      <Text style={styles.title}>title</Text>
      <Text style={styles.desc}>desc</Text>
      <Text style={styles.price}>price</Text>
    </SafeAreaView>
  );
};

/*"id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image":*/
export default Details;
