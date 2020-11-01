// helpers
import apiCallHelper from '../../utils/apiCallHelper';

export default url => {
  const options = {
    method: 'GET'
  };

  return apiCallHelper(url, options);
};
