import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyles';
import Home from './pages/Home';
import Wave from './pages/Wave';
import Bounce from './pages/Bounce';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wave' element={<Wave />} />
        <Route path='/bounce' element={<Bounce />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;