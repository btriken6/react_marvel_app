import React, { useState } from "react";
import { useGolbalContext } from "./Context";
import "../App.css";

const Search = (props) => {
  const { titleStartsWith, searchPost } = useGolbalContext();
  // const {flag,setFlag}=useState(true)
  return (
    <>
      <div className='center'>
        <div>
          <input
            className='search'
            type='text'
            placeholder='search'
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
