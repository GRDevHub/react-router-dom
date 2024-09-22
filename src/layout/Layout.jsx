import NavBar from '../Components/NavBar';
import { Outlet, useNavigation } from 'react-router-dom';

const Layout = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    return (
        <div>
            {/* Navbar */}
            <NavBar />
            {/* paginas (home, blog, about) */}
            { 
                navigation === 'loading' 
                ? <div className='alert alert-info my-5 py-5'>Loading...</div>
                : <Outlet />
            }
            {/* Footer */}
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;
