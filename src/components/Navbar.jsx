import { Button } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
<nav className="bg-yellow-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Nome da Pizzaria à Esquerda */}
        <h1 className="text-white text-2xl font-bold">Sua Pizzaria</h1>

        {/* Botões Centralizados */}
        <div className="flex-1 flex justify-center space-x-4">
          <Button sx={{ color: 'white', border: '1px solid white' }} variant="outlined">
            Home
          </Button>
          <Button sx={{ color: 'white', border: '1px solid white' }} variant="outlined">
            Sobre Nós
          </Button>
          <Button sx={{ color: 'white', border: '1px solid white' }} variant="outlined">
            Produtos
          </Button>
          <Button sx={{ color: 'white', border: '1px solid white' }} variant="outlined">
            FAQ
          </Button>
        </div>

        {/* Ícone de Carrinho Alinhado à Direita */}
        <div>
          <Button variant="outlined" sx={{ color: 'white', border: '1px solid white', marginRight: ".5rem" }}>
            <PersonIcon sx={{ color: 'white' }} />
          </Button>
          <Button variant="outlined" sx={{ color: 'white', border: '1px solid white' }}>
            <ShoppingCartIcon sx={{ color: 'white' }} />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
