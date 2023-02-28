import './App.css';

// 1 - config react router
import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* nested Routes */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* Rotas Dinâmicas */}
          <Route path='/product/:id' element={<Product />} />
          {/* 9 - search */}
          <Route path='search' element={<Search/>} />
          {/* 10 redirect */}
          <Route path='/company' element={<Navigate to='/about' />} />
          {/* no match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
