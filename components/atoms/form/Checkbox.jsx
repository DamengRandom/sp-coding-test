import React from 'react';

export default function Checkbox({ name, checkboxRegister, text }) {
  return (
    <div className="mb-8 pr-4">
      <input
        id={name}
        name={name}
        className="form-checkbox h-8 w-8"
        type="checkbox"
        ref={checkboxRegister}
      />
      <label
        htmlFor="acceptTerms"
        className="pl-2">
        {text}
      </label>
    </div>
  );
};
