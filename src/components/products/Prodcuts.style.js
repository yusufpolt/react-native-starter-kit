import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  /************************PRODUCTS STYLE*********************/
  container: {},
  /************************PRODUCTS CARD STYLE*********************/
  cardContainer: {
    borderColor: 'bdbdbd',
    borderWidth: 1,
    backgroundColor: '#e0e0e0',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  bodyContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
  },
  price: {
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
