import React from 'react';

export default function InputField({ label, type, name, register, error, placeholder }) {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={name}>
          {label}
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={name}
        type={type || 'text'}
        name={name}
        ref={register}
        placeholder={placeholder}
      />
        <p className="text-red-600 text-xs italic">{error}</p>
      </div>
    </div>
  );
};
