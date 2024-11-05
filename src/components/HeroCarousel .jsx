import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const items = [
  {
    image:
      'https://www.assai.com.br/sites/default/files/blog/mesa_com_pizza_e_temperos_-_abrir_uma_pizzaria_-_assai_atacadista.jpg',
    title: 'Produtos selecionados!',
    description: 'Sabor inconfundível com ingredientes de alta qualidade.'
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YfjBLH-7TJVNDpJvs5qigQDl2Jpm-UDADg&s',
    title: 'Qualidade inquestionável!',
    description: 'Sabores e experiências inconfundíveis.'
  },
  {
    image:
      'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
    title: 'Do forno para sua casa!',
    description: 'Entrega feita com rapidez e qualidade.'
  }
]

const HeroCarousel = () => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Paper
          key={index}
          className="p-4"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px'
          }}
        >
          <div className="flex flex-col justify-center items-center text-center h-full bg-black bg-opacity-50">
            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            <p className="text-gray-300">{item.description}</p>
            <Button
              variant="outlined"
              sx={{ marginTop: '16px', color: 'white', borderColor: 'white' }}
            >
              Peça Agora
            </Button>
          </div>
        </Paper>
      ))}
    </Carousel>
  )
}

export default HeroCarousel
