import axios from 'axios';

const GET_ALL_PRODUCTS_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = () => {
  return axios.get(GET_ALL_PRODUCTS_URL);
};

export const getDetailById = detailId => {
  return axios.get(`${GET_ALL_PRODUCTS_URL}/${detailId}`);
};
