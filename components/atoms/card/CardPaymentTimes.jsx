import React from 'react';

export default function CardPaymentTimes({numberOfPayments}) {
  return (
    <div className="flex justify-between items-center pt-12">
      <strong>Number of Payments:</strong>
      <span className="inline-block bg-teal-500 rounded-full px-4 py-1 text-sm font-semibold text-white">{numberOfPayments}</span>
    </div>
  );
};
