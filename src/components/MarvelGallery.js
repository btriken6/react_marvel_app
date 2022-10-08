import React from 'react'
import { Link} from 'react-router-dom';
import { useGolbalContext } from './Context'
import Pagination from './Pagination';

const MarvelGallery = () => {
    const { results, isLoading } = useGolbalContext();
    
    // const filtered=comics.filter((item)=>{
    //     if(item.images.length===0){
    //         return false;
    //     }
    //     else{
    //         return item;
    //     }
    // });
    if (isLoading) {
        return (
            <>
                <h1 className='loading_logo'>Loading...</h1>
            </>
        )
    }



    return (
        <>
            <h1>Marvel Series</h1>
            <div><Pagination/></div>
            <div className="grid">
            
                {
                    results.map((item) => {
                        const { id, title } = item
                        return (
                            <Link to={`./details/${id}`} key={id}><div >
            
                                <img src={item.thumbnail.path + "." + item.thumbnail.extension} alt="" />
                                <h3>{title}</h3>
                            </div></Link>
                        )
                    })

                }
            </div>
        </>
    )



}

export default MarvelGallery