// import PropTypes from 'prop-types';
// import NavBar from '../Components/NavBar';
import { useLoaderData } from 'react-router-dom';
import CardsComponents from '../Components/CardsComponents';

const Blog = () => {
    const { personajes } = useLoaderData();
    // console.log(personajes);
    return (
        <div >
            <div className='container'>
                <h1 className='text-primary mt-3'>Blog</h1>
                <CardsComponents personajes={ personajes } />
            </div>
        </div>
    )
}

// Blog.propTypes = {

// }

export default Blog;
