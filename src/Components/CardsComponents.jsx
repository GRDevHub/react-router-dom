import PropTypes from 'prop-types';
import Card from './Card';
import { Link } from 'react-router-dom';

const CardsComponents = ({ personajes }) => {
    return (
        <div className='mt-4 row row-cols-1 row-cols-md-3 g-4 border justify-content-center'>
            {   personajes.map( item => (
                    <Link key={ item.id } to={`/blog/${item.id}`}>
                        <Card personaje={ item } />
                    </Link>
                ))
            }
        </div>
    );
}

CardsComponents.propTypes = {
    personajes: PropTypes.array.isRequired,
}

export default CardsComponents;
