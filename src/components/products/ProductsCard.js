import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './Prodcuts.style';

const ProductsCard = ({product, onSelect}) => {
  const {image, title, price} = product;
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.cardContainer}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductsCard;
