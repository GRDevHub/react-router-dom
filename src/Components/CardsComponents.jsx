import PropTypes from 'prop-types';
import Card from './Card';

const CardsComponents = ({ personajes }) => {
    return (
        <div className='mt-4 row row-cols-1 row-cols-md-3 g-4 border'>
            { personajes.length == 0
                ? <h1 className='text-primary'>Loading...</h1>     
                : personajes.map( item => (
                    <Card key={ item.id } personaje={ item } />
                ))
            }
        </div>
    );
}

CardsComponents.propTypes = {
    personajes: PropTypes.array.isRequired,
}

export default CardsComponents;
