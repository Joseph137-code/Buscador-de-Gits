import React  from 'react'
import Gits from './Gits'

const Categorias = ({categories}) => {

    return (
        <>
            {
                categories.map(category => {
                    return <Gits key={category} category={category}  />
                })
            }

        </>
    )
}

export default Categorias
