import {useState} from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {


    const [contador, setContador] = useState(0)

    const restar = () => {
        if (contador > 0){
            setContador(contador -1)
        }
    }
    const sumar = () => {
        if (contador < 10){
            setContador(contador +1)
        }
    }
    
    const mostrarMensaje =()=> {
        alert(`Agregaste al carrito ${contador} unidades`)
    }

    return (
    <div>
       <Button colorScheme='teal' size='xs' onClick={restar}>
    -
  </Button>
  <Button onClick={mostrarMensaje}>Agregar al carrito {contador}</Button>
  <Button colorScheme='teal' size='xs' onClick={sumar}>
    +
  </Button>
    </div>
    )
}

export default ItemCount;