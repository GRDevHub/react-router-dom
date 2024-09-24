import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const NavBar = () => {
    const { user } = useContext(UserContext); // { user, setUser }
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <NavLink to='/' className='btn btn-outline-info'>Home</NavLink>
                <NavLink to='/about' className='btn btn btn-outline-info'>About</NavLink>
                { user.state 
                    ? <NavLink to='/blog' className='btn btn btn-outline-info'>Blog</NavLink>
                    : null
                }
            </div>
        </nav>
    )
}


export default NavBar;
