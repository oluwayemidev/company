import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import Home from './Pages/Home/home';
import Blog from './Pages/Blog/blog';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Courses from './Pages/Courses/courses';
import ScrollToTop from './components/customers/ScrollToTop';




function App() {
    return (
      <BrowserRouter basename={'/'}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='blog' element={<Blog />} />
            <Route path='courses' element={<Courses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
};


export default App;