import '../styles/header.css';
import '../styles/footer.css';
import list from '../icons/list.svg';
import times from '../icons/times.svg';
import facebook from '../icons/facebook.svg';
import instagram from '../icons/instagram.svg';
import twitter from '../icons/twitter.svg';
import sendFill from '../icons/sendFill.svg';
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'



function Layout(props){
    const [isActive, setActive] = useState(false);
    const [navColor, setHead] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const activeToggle = () => {
        if(window.innerWidth <= 1150){
            toggleClass();
        }
    }

    const scrollHead = () => {
        if(window.scrollY > 20){
            setHead(true);
        } else {
            setHead(false);
        }
    }
    window.addEventListener('scroll', scrollHead)

    return(
        <React.Fragment>
            {/* Header */}
            <div onScroll={scrollHead} className={isActive ? "header-2" : "header" + (navColor ? " ScrollHandler" : '')}>
                <div className='logo'>LOGO</div>
                <div className='nav'>
                    <Link onClick={activeToggle} to='/'>Home</Link>
                    <Link onClick={activeToggle} to='/courses'>Courses</Link>
                    <Link onClick={activeToggle} to='/blog'>Blog</Link>
                    <Link onClick={activeToggle} to='/about'>About</Link>
                    <Link onClick={activeToggle} to='/contact'>Contact</Link>
                </div>
                <div className='btn'>
                    <Link onClick={activeToggle} to='/login'>Log in</Link>
                    <button><Link onClick={activeToggle} to='/signup'>Start for free</Link></button>
                </div>
                <div className="nav-icon" onClick={toggleClass}>
                    <img src={isActive ? times : list} alt="menu" />
                </div>
            </div>

            <Outlet />
            {/* Footer */}
            <div className="footer">
                <div className='logo'>LOGO</div>
                <div className="menu">
                    <Link to='/'>Home</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className="searchArea">
                    <input type="email" name="search" id="search" placeholder='Email' />
                    <img src={sendFill} alt="" />
                    <p>Stay in touch with us!</p>
                </div>
                <div className="socialMedia">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Layout;