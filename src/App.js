import SignIn1 from './pages/SignIn1';
import SingleProduct from './components/SingleProduct';
import { Container,Paper } from '@mui/material';
import Products from './pages/Products';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel1 from './components/Carousel1';
import { Box } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Home from './pages/Home';
import Error from './pages/Error';
import Forwarding from './pages/Forwarding';


import SignUp1 from './pages/SignUp1';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Forwarding />}/>
      <Route path='/login' element={<SignIn1 />}>
        <Route index element={<Home />} />
      </Route>
      <Route path={'/signup'} element={<SignUp1/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>


  
  );
}

export default App;
