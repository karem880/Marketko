import {  Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/home';
import Shop from './pages/Shop';
import Details from './pages/Details';
import NotFound from './pages/NotFound';



function App() {

  return (
    <>
          <NavBar />

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/products/:id" element={<Details/>} />
        <Route path="*" element={<NotFound/>} />



     
      </Routes>
    
    </>
    
  );
}

export default App;
