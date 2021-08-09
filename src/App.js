import React, {useState} from 'react';
import Categorias from './components/Categorias';
import Search from './components/Search';
import "./App.css"



function App() {
  const [categories, setCategories] = useState(["Elite"])
  
  return (
    <div className="container">
      <h2 className="text-center my-5">
        Gits App.
        <small className="text-muted"> Encuentra tus gits favoritos</small>
      </h2>

      <Search setCategories={setCategories} />
      <hr />
      <div className="d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <Categorias categories={categories} />
      </div>
    </div>
   
  );
}

export default App;
