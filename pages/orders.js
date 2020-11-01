import React from 'react';
// api
import createOrder from './api/orders';
// components
import CreateOrderForm from '../components/organisms/CreateOrderForm';

export default function Orders() {
  return (
    <div>
      <h2
        className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center my-8"
      >
        Create an <span className="text-red-400">Order</span> here.
      </h2>
      <CreateOrderForm createOrder={createOrder} />
    </div>
  );
};
