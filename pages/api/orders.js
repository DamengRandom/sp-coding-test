// helpers
import apiCallHelper from '../../utils/apiCallHelper';

const createOrder = (url, body) => {
  const options = {
    method: 'POST',
    body
  };

  return apiCallHelper(url, options);
};

export default createOrder;
