import React from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'




export const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a mi tienda online"}/>
      
    </div>
  )
}

export default App
