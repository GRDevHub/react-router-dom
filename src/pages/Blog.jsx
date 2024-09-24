import { useLoaderData, useNavigate } from 'react-router-dom';
import CardsComponents from '../Components/CardsComponents';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const Blog = () => {
    const { personajes } = useLoaderData();
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    // console.log(personajes);
    const onDesconectar = () => {
        if(user.state){
            console.log('Ingresa')
            setUser( {
                ...user,
                state: !user.state
            } );
            navigate('/');
        }
    }

    useEffect(() => {
        if(!user.state){
            navigate('/');
        }
    }, [user.state, navigate])

    return (
        <div >
            <div className='container'>
                <h1 className='text-primary mt-3'>Blog</h1>
                <button className="btn btn-danger text white ms-3" onClick={ onDesconectar }>Cerrar Sesión</button>
                <CardsComponents personajes={ personajes } />
            </div>
        </div>
    )
}

export default Blog;
