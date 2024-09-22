// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <NavLink to='/' className='btn btn-outline-info'>Home</NavLink>
                <NavLink to='/about' className='btn btn btn-outline-info'>About</NavLink>
                <NavLink to='/blog' className='btn btn btn-outline-info'>Blog</NavLink>
            </div>
        </nav>
    )
}

// NavBar.propTypes = {

// }

export default NavBar;
