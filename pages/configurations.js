import React, { useEffect, useState } from 'react';
// configs
import { configuration_api_url } from '../configs/constants';
// api
import fetchConfigurations from './api/configurations';
// components
import ConfigurationCard from '../components/organisms/ConfigurationCard';
import SkeletonCardLoader from '../components/molecules/SkeletonCardLoader';

function Configurations() {
  const [state, setState] = useState({
    data: null,
    loading: false
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true
    });

    async function getStates() {
      const configuration = await fetchConfigurations(configuration_api_url);
      if (configuration) {
        setState({
          data: configuration,
          loading: false
        });
      } else {
        setState({
          data: null,
          loading: false
        });
      }
    };
    getStates();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {state.loading ? <SkeletonCardLoader /> : 
        state.data ? <ConfigurationCard
          title={state.data.type}
          description={state.data.description}
          numberOfPayments={state.data.numberOfPayments}
          promotionLink={state.data.promotionUrl}
          languages={state.data.locales}
          minAmount={state.data.minimumAmount}
          maxAmount={state.data.maximumAmount}
        /> : <SkeletonCardLoader />}
    </div>
  );
};

export default Configurations;
