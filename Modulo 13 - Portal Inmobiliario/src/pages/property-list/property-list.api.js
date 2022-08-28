import Axios from 'axios';

const propertyListUrl = `${process.env.BASE_API_URL}/properties?`;
export const getPropertyList = queryParams => Axios.get(`${propertyListUrl}${queryParams}`).then(({data}) => data)

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;
export const getSalesTypes = () => Axios.get(saleTypeListUrl).then((response) => {return response.data;})

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
export const getProvincesList = () => Axios.get(provinceListUrl).then((response =>{return response.data;}))


