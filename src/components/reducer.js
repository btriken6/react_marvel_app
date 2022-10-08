const reducer=(state,action)=>{
    switch(action.type){
        case "Set_loading":
            return {
                ...state,
                isLoading:true,
            };
        case "Get_series":
            return{
                ...state,
                isLoading:false,
                total:action.payload.total,
                results: action.payload.results,
            };
        case "search_series":
            return{
                ...state,
                titleStartsWith:action.payload
            };
        case "get_next_data":

            return {
              ...state,
              offset: state.offset + 20
            };
        case "get_prev_data":
 
            return{
                ...state,
                offset:state.offset - 20
            };
    }
    return state;
}
export default reducer;