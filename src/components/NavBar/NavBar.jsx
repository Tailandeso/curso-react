import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

export const NavBar = () => {
  return (
    <div>
        <Flex>
            <Box p='4'>
                MyEcommerce
            </Box>
            <Spacer />


            <Menu>
  <MenuButton>
    Categorías
  </MenuButton>
  <MenuList>
    <MenuItem>Categoría 1</MenuItem>
    <MenuItem>Categoría 2</MenuItem>
  </MenuList>
</Menu>
<Spacer />



            <Box p='4'>
                <CartWidget/>
            </Box>
        </Flex>
    
    </div>
  )
}

export default NavBar