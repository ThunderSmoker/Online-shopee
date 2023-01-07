import React from 'react'
import Carousel1 from '../components/Carousel1'
import Products from './Products'
import Appbar from '../components/Appbar'
import { Box } from '@mui/system'


const Home = () => {
  return (
    <>
    <Appbar/>
    <Box marginRight={10}>

    <Carousel1/>
    <Products/>
    </Box>
    </>
  )
}

export default Home
