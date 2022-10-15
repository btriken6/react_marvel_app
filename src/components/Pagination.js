import React from "react";
import { useGolbalContext } from "./Context";

const Pagination = () => {
  const { getPrevData, getNextData } = useGolbalContext();
  return (
    <div className='center'>
      <div className=' pagination'>
        <button onClick={() => getPrevData()}>PREV</button>
        <button onClick={() => getNextData()}>NEXT</button>
      </div>
    </div>
  );
};

export default Pagination;
