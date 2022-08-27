import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './componen/home/Home';
import About from './componen/about/About';
import Portofolio from './componen/portofolio/Portofolio';
import Article from './componen/article/Article';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
