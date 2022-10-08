import React from 'react'
import { useGolbalContext } from './Context'

const Pagination = () => {
  const {getPrevData,getNextData}=useGolbalContext();
  return (
    <div>
      <button onClick={()=>getPrevData()}>PREV</button>
      <button onClick={()=>getNextData()}>NEXT</button>
    </div>
  )
}

export default Pagination