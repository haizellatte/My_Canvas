import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyles';
import Home from './pages/Home';
import Wave from './pages/Wave';
import Bounce from './pages/Bounce';
import Shape from './pages/Shape';


const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shape' element={<Shape />} />
        <Route path='/bounce' element={<Bounce />} />
        <Route path='/wave' element={<Wave />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;