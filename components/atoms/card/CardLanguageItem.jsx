import React from 'react';
import ReactCountryFlag from "react-country-flag";

export default function CardLanguageItem({ language }) {
  return (
    <div className="flex items-center px-4 text-sm w-24">
      {
        language === 'Language' ? 
          <p className="py-2">Language</p> : 
          (
            <>
              <ReactCountryFlag
                className="emojiFlag"
                countryCode={language === "en" ? "AU" : language.toUpperCase()}
                style={{
                  fontSize: "2em",
                  lineHeight: "1.25em",
                }}
                aria-label={language.toUpperCase()}
              />
              <p className="pl-2">{language}</p>
            </>
          )
      }
    </div>
  )
}
