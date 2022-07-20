import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import Home from './Pages/Home/home';
import Blog from './Pages/Blog/blog';
import About from './Pages/About/about';




function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='blog' element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
};


export default App;