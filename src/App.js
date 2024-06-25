//import logo from './logo.svg';
import './App.css';
import Inicio from './componentes/inicio/Inicio'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './componentes/header/NavBar';
import Blog from './componentes/blog/Blog';
import Footer from './componentes/footer/Footer';

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
   <Route path="/" element={<Inicio/>}/>
   <Route path='/categoria/myblog' element={<Blog/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
