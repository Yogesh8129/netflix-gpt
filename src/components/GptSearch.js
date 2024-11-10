import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGORUND } from "../utils/constants";

const GptSearch = () => {
    return (
        <div>
        <div className='absolute w-full h-full -z-10'>
            <img src={BACKGORUND}
            alt="Background" 
            className="w-full min-h-full" />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
        </div>
    )
}

export default GptSearch;