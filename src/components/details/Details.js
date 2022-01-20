import React, {useState} from 'react';
import styles from './Details.style';
import {Image, SafeAreaView, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  activeProductSelector,
  savedProductsSelector,
} from '../../appData/products/selectors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {saveProductAction} from '../../appData/products/actions';

const Details = () => {
  const activeProduct = useSelector(activeProductSelector);
  const dispatch = useDispatch();
  const savedProducts = useSelector(savedProductsSelector);
  const [isInSavedProducts, setIsInSavedProducts] = useState(
    savedProducts.findIndex(product => product.id === activeProduct.id) !== -1
      ? true
      : false,
  );

  const saveProduct = () => {
    setIsInSavedProducts(!isInSavedProducts);
    dispatch(saveProductAction(activeProduct));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={null} style={styles.image} />
      <Text style={styles.title}>{activeProduct.title}</Text>
      <Text style={styles.desc}>{activeProduct.description}</Text>
      <Text style={styles.price}>{activeProduct.price}</Text>
      <TouchableOpacity
        style={StyleSheet.compose(styles.saveButton, {
          backgroundColor: isInSavedProducts ? 'tomato' : 'white',
          borderWidth: !isInSavedProducts ? 1 : 0,
          borderColor: !isInSavedProducts ? 'tomato' : null,
        })}
        onPress={saveProduct}>
        <Text style={{color: isInSavedProducts ? 'white' : 'tomato'}}>
          {isInSavedProducts ? 'Remove' : 'Save'}
        </Text>
      </TouchableOpacity>
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
