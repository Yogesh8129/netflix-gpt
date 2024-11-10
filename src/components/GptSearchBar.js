import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <form className="w-1/2 bg-black grid grid-cols-12 overflow-hidden">
        <input
          type="text"
          className="p-4 m-4 col-span-9 overflow-hidden"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
