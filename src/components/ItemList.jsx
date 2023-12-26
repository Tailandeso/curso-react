import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <>
      {productos.map((p) => (
        <div>
          <Item
          titulo = {p.titulo}
          descripcion = {p.descripcion}
          precio = {p.precio}/>
        </div>
      ))}
    </>
  );
};

export default ItemList;
