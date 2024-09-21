import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = props => {
    return (
        <div>
            {/* Navbar */}
            <NavBar />
            {/* paginas (home, blog, about) */}
            <Outlet />
            {/* Footer */}
            {/* <Footer /> */}
        </div>
    )
}

Layout.propTypes = {

}

export default Layout;
