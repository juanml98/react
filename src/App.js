import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categorias/:categoria' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
      
      <footer class='footer mt-auto py-3 bg-light'>
        <div class='container'>
          <span class='text-muted'>React | Coderhouse 2022</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

