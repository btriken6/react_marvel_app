import React, { useState, useEffect } from "react";
import { useGolbalContext } from "./Context";
import "../App.css";
import axios from "axios";
const ListView = () => {
  const { results, isLoading, offset } = useGolbalContext();
  const [newIsLoading, setNewIsLoading] = useState(isLoading);
  const [newOffset, setNewOffset] = useState(offset);
  const [sortResults, setSortedResult] = useState([...results]);
  // console.log(sortResults)
  let API =
    "http://gateway.marvel.com/v1/public/series?ts=1&apikey=2fd01d9d50ceb165c1cfa5b1a260335b&hash=51cb1673ea353b6bfd5333ad71bc3dff";

  // const fetchApiGetData = (url) => {
  //     axios.get(url)
  //     .then((res) => {

  //     })
  //     }
  // }

  const sortYear = () => {
    const sorted = [...sortResults].sort((a, b) => b.startYear - a.startYear);
    setSortedResult(sorted);
  };

  const getPrevData = () => {
    let newUpOffset = newOffset - 20;
    setNewOffset(newUpOffset);
  };
  const getNextData = () => {
    let newUpOffset = newOffset + 20;
    setNewOffset(newUpOffset);
  };

  const fetchApiGetData = (url) => {
    axios.get(`${API}&offset=${newOffset}`).then((res) => {
      // console.log( res.data.data.results)
      setSortedResult(res.data.data.results);
      setNewIsLoading(false);
    });
  };

  useEffect(() => {
    fetchApiGetData(`${API}&offset=${newOffset}`);
  }, [newOffset]);

  if (newIsLoading) {
    return (
      <>
        <h1 className='loading-logo'>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <h1>Marvel Series</h1>
      <p>{newOffset}</p>
      <div className='center'>
        <div className='pagination'>
          <button onClick={() => getPrevData()}>PREV</button>
          <button onClick={() => getNextData()}>NEXT</button>
        </div>
        <div>
          <button onClick={() => sortYear()}>SortByYear</button>
        </div>
      </div>
      <div className='grid'>
        {sortResults.map((item) => {
          const { id, title, startYear } = item;
          return (
            <div className='card' key={id}>
              <div className='list-view-text'>
                <ul>
                  <li>
                    <h1>{title}</h1>
                    <p>{startYear}</p>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListView;
