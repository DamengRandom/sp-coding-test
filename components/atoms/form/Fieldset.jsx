import React from 'react';

export default function Fieldset({ ledgendText, children }) {
  return (
    <div>
      <fieldset className="border-solid border-2 border-gray-300 p-4 mb-8">
        <legend>{ledgendText}</legend>
        {children}
      </fieldset>
    </div>
  );
};
