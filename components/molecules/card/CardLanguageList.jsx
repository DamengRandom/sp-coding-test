import React, { useState } from "react";
// components
import CardLanguageItem from '../../atoms/card/CardLanguageItem';

export default function CardLanguageList({ languages }) {
  const [toggle, setToggle] = useState(false);
  const [currentCountry, setCurrentCountry] = useState('Language');
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCountryUpdate = language => {
    setCurrentCountry(language);
    setToggle(!toggle);
  };

  return (
    <div className="relative inline-block text-left pr-6">
      {/* Dropdown Menu */}
      <div onClick={handleToggle}>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className={"inline-flex justify-center items-center rounded-md border border-gray-300 px-4 bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"}
            id="language-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {<CardLanguageItem language={currentCountry} />}
            {toggle ? <span className="pl-2">&darr;</span> : <span className="pl-2">&uarr;</span>}
          </button>
        </span>
      </div>
      {/* Dropdown Items */}
      {toggle && (
        <div className={
          `origin-top-right mt-2 rounded-md shadow-lg ${toggle ? "card-dropdown__active" : ""}`
        }>
          <div className="rounded-md bg-white shadow-xs">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-menu"
            >
              {languages.map((lang, index) => (
                <button
                  key={`${index}-${lang}`}
                  type="button"
                  className="block px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                  onClick={() => handleCountryUpdate(lang)}
                >
                  <CardLanguageItem language={lang} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
