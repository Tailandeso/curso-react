import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './components/NavBar/CartWidget';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a mi tienda online"} />
      </div>
      <Routes>
        <Route path='/' element={<main />} />
        <Route path='/cart' element={<CartWidget />} />
        <Route path='/itemlist' element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


