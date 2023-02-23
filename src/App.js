
import Header from './components/header';
import './asset/styles/Header-Footer.css';
import './asset/styles/caja.css'
import Footer from './components/footer';
import {Route, Routes} from 'react-router-dom';
import { Categorias } from './Routes/categorias';
import { Home } from './Routes/home';
import { categories } from './services/urlConst';
import { CatProduct } from './components/categoryProduct';

function App() {
  return (
    <div>
    <Header/>
    
    <Routes>
      <Route path='/' element = {<Home/>}/>
     <Route  path='/category/:product' element = { <CatProduct/> } />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
