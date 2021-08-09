import React, {useState} from 'react'

const Search = ({setCategories}) => {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim().length > 2){
            setCategories(cats => [value, ...cats ])
            setValue("");
        }
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Agrega una Categoria" 
                aria-label="Agrega una Categoria" 
                aria-describedby="button-addon2"
                value={value}
                onChange= {handleChange}
            />
        </form>
    
    )
}

export default Search
