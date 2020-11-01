import React from 'react'

export default function PriceCurrencyInput({
  label,
  valueType,
  valueName,
  valueRegister,
  valueError,
  currencyName,
  currencyRegister,
  currencyError
}) {
  return (
    <div>
      <label htmlFor={valueName}
        className="block text-sm leading-5 font-medium text-gray-700 font-bold">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm sm:leading-5">
            $
          </span>
        </div>
        <input className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
          id={valueName}
          type={valueType || 'text'}
          name={valueName}
          ref={valueRegister}
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <select
            name={currencyName}
            aria-label="Currency"
            className="form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5"
            ref={currencyRegister}>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-red-600 text-xs italic">{valueError}</p>
        <p className="text-red-600 text-xs italic">{currencyError}</p> 
      </div>
    </div>
  )
}
