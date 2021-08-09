import React  from 'react'
import { useFetchGits } from '../Hooks/useFetchGits'
import Spinner from './Spinner';

const Gits = ({category}) => {
 
    const {data, loading} = useFetchGits(category);
 
    return (
        
      <>
          {loading && <Spinner/>}
        {
            data.map(img => (
            <div className="card mt-2 ms-3 animate__animated animate__fadeInDownBig animate__delay-1s"  key={img.id}>
                <img src={img.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">{img.title}</h5>
                </div>
            </div>

            ))
        }
       </>
    )
}

export default Gits
