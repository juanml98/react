import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import CartWidget from './components/cartWidget.js/cartWidget';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <NavBar />
        <CartWidget />
        <ItemListContainer greeting='¡Bienvenidos!' />

        <ItemListContainer/>
        <ItemListContainer/>
        <ItemListContainer/>
        
        <img src="" className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
