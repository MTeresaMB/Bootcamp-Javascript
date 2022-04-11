import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementList = () => Axios.get(url).then(({data}) => data);

export const getMovements = id => Axios.get(url, {params: {params: id}}).then(({data}) => data);

//como se relaciona el account con movement, como a traves del id de la url recupero los movimientos
