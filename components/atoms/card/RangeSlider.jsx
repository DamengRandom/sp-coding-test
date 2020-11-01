import React from 'react';

export default function RangeSlider({ minAmount, maxAmount }) {
  const handleCurrencyDisplay = (currencyString) => {
    switch(currencyString) {
      case 'EUR':
        return <span>&#128;</span>;
      case 'AUD':
      case 'USA':
        return <span>&#36;</span>;
      default:
        return <span>&#128;</span>;
    }
  };

  return (
    <div className="pt-6">
      <strong className="pr-4">Amount: (Min ~ Max)</strong>
      <div className="py-1 relative min-w-full">
        <div className="h-2 bg-gray-200 rounded-full w-full">
          <div className="absolute h-2 rounded-full bg-teal-500 w-full"></div>
          <div className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 right-0" unselectable="on"></div>
          <div className="absolute text-gray-800 bottom-0 left-0 -mb-6">
            {minAmount.amount} {handleCurrencyDisplay(minAmount.currency)}
          </div>
          <div className="absolute text-gray-800 mr-1 bottom-0 right-0 -mb-6">
            {maxAmount.amount} {handleCurrencyDisplay(minAmount.currency)}
          </div>
        </div>
      </div>
    </div>
  );
};
