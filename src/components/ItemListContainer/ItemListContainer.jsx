import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const mostrarProductos = new Promise((resolve) => {
      
      const productos = [
        { titulo: "producto A", descripcion: "descripcion de producto A", precio: 1000 },
        { titulo: "producto B", descripcion: "descripcion de producto B", precio: 2000 },
        { titulo: "producto C", descripcion: "descripcion de producto C", precio: 3000 }
      ];

      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });

    mostrarProductos
      .then((resultado) => {
        console.log(resultado);
        setProductos(resultado);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

  return (
    <div>
      <p>{greeting}</p>
      <ItemList productos={productos} />
    </div>
  );
};

