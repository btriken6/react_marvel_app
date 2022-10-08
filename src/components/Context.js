// //context creaton
// //provider
// //useContext Hook
import React from "react";
import reducer from "./reducer";
import axios from "axios";
import { useContext, useReducer, useEffect } from 'react';
let API = "http://gateway.marvel.com/v1/public/series?ts=1&apikey=2fd01d9d50ceb165c1cfa5b1a260335b&hash=51cb1673ea353b6bfd5333ad71bc3dff";

const initialstate = {
    isLoading: true,
    titleStartsWith: "",
    offset:0,
    total: 0,
    results: []
}



const AppContext = React.createContext();
const AppProvider = ({ children }) => {



    const [state, dispatch] = useReducer(reducer, initialstate)
    // console.log(state)
    const fetchApiGetData = (url) => {
        dispatch({type:"Set_loading"});
        axios.get(url)
        .then((res) => {
            // console.log(res)
            // console.log(res.data.data.total)
            dispatch({type:"Get_series",
            payload:{

                total:res.data.data.total,
                results: res.data.data.results

            }
           
        })
        })
    }
    //search
    const searchPost=(search_name)=>{
        dispatch({type:"search_series",
        payload:search_name})
    }
    //pagination
    const getNextData=()=>{
        dispatch({
            type:"get_next_data",
        })
    }
    const getPrevData=()=>{
        dispatch({
            type:"get_prev_data",
        })
    }
    
    
    
    useEffect(() => {

        if(state.titleStartsWith.length===0){
            
            if(state.offset===0){
                fetchApiGetData(`${API}`)
                console.log("offset is 1:"+state.offset)
            }
            else{
                fetchApiGetData(`${API}&offset=${state.offset}`)
            }
            
        }
        else{
         fetchApiGetData(`${API}&titleStartsWith=${state.titleStartsWith}&offset=${state.offset}`);
        }
    }, [state.titleStartsWith, state.offset])
    
    

    return <AppContext.Provider value={{...state,searchPost,getPrevData,getNextData}}>{children}</AppContext.Provider>
}
//custom hook
const useGolbalContext = () =>{
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGolbalContext }