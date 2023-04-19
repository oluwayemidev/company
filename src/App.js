import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import Home from './Pages/Home/home';
import Blog from './Pages/Blog/blog';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Courses from './Pages/Courses/courses';
import Signup from './Pages/Form/signup';
import Login from './Pages/Form/login';
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
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
};


export default App;