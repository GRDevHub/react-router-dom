// import PropTypes from 'prop-types'
// import NavBar from '../Components/NavBar'

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {

    const { user, setUser } = useContext(UserContext);

    const onConectar = () => {
        // Usuario conectado
        if(!user.state){
            setUser( {
                ...user,
                state: !user.state
            } );
        }else{
            console.log('El usuario ya esta conectado');
        }
    }

    return (
        <>
            <div className='container'>
                <h1 className='text-primary mt-3'>HOME</h1>
                {
                    !user.state
                        ? <button className="btn btn-success text white ms-3" onClick={ onConectar }>Registrarse</button>
                        : ''
                }
            </div>
        </>
    )
}

// Home.propTypes = {

// }

export default Home;
