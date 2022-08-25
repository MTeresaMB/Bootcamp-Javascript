import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

// export const getMovementsList = () => Axios.get(url).then(({data}) => data)

export const getAccountMovement = id => Axios.get(url, {params : {accountId: id}}).then(({data}) => data);

