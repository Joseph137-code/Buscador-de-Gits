import {useState, useEffect} from 'react'
import getGits from '../helpers/getGits';

export const useFetchGits = (category) => {

   const [state, setstate] = useState({
       data: [],
       loading: true
   });

   useEffect(() => {
        getGits(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            })

        // eslint-disable-next-line 
    }, [category])

   return state;
}
