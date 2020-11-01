// configs
import { sample_bearer_token } from '../configs/secrets';

const apiCallHelper = async (url, options) => {
  const requestOptions = {
    headers: {
      'Authorization': `Bearer ${sample_bearer_token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    ...options,
    redirect: 'follow'
  };

  try {
    return await fetch(url, requestOptions)
    .then(res => res.json())
    .catch(err => console.log('create order error', err));
    // @TODO: need a component to display errors in detail;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default apiCallHelper;
