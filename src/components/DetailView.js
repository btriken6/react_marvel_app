import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useGolbalContext } from './Context'
const DetailView = () => {
    const {isLoading } = useGolbalContext();
    const [results,setResult]=useState([])
    const [newIsLoading,setNewIsLoading]=useState(isLoading)

    const params=useParams();
    // console.log(params.id)
    const series_id=params.id;
    let API = "http://gateway.marvel.com/v1/public/series";
    let API_KEY="?ts=1&apikey=2fd01d9d50ceb165c1cfa5b1a260335b&hash=51cb1673ea353b6bfd5333ad71bc3dff";
  const navigate=useNavigate()

    const getPrevData=()=>{
      const index = results.findIndex((rank) => rank.id == series_id);
      // console.log(results[index-1].id);
      navigate(`/details/${results[index-1].id}`)
    }
    const getNextData=()=>{
      const index = results.findIndex((rank) => rank.id == series_id);
      // console.log(results[index+1].id);
      navigate(`/details/${results[index+1].id}`)
    }
    
    useEffect(()=>{
        setNewIsLoading(true)
        axios.get(API+API_KEY+`&limit=100`)
        .then((res)=>{
            // console.log(res.data.data.results);
            setResult(res.data.data.results)
            setNewIsLoading(false)
        })
    },[series_id])

    if (newIsLoading) {
      return (
          <>
              <h1 className='loading-logo'>Loading...</h1>
          </>
      )
    }
 

  return (
    <>
    <div>
      <button onClick={() => getPrevData()}>PREV</button>
      <button onClick={() => getNextData()}>NEXT</button>
    </div>
    <div className='red'>
          {
            results.map((item)=>{
              if (item.id == series_id) {

                return (

                  <div key={item.id}>
                    <h3>{item.title}</h3>
                  </div>)
              }
            })
          };                  
                

    </div>

       
    </>
  )
}

export default DetailView