import React from "react";

const GptSearchBar = () => {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <form className="w-1/2 bg-black grid grid-cols-12 overflow-hidden">
        <input
          type="text"
          className="p-4 m-4 col-span-9 overflow-hidden"
          placeholder="What would you like to watch today?"
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
