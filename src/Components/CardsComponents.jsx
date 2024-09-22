import PropTypes from 'prop-types';
import Card from './Card';
import { Link, useSearchParams } from 'react-router-dom';

const CardsComponents = ({ personajes }) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (e) => {
        let filter = e.target.value;
        setSearchParams({ filter: filter });
    };

    const perFilter = personajes.filter( item => {
        let filter = searchParams.get('filter');
        let name = item.name.toLowerCase();

        if(!filter){
            return true;
        }else{
            return name.startsWith(filter.toLowerCase());
        }
    });

    return (
        <div className='mt-4 row row-cols-1 row-cols-md-3 g-4 border justify-content-center'>
            <input 
                className='form-control mb-2' 
                type='text' 
                placeholder='Personaje...'
                onChange={ handleChange } 
                value={ searchParams.get('filter') ? searchParams.get('filter') : '' } 
            />
            {   perFilter.length > 0
                ? perFilter.map( item => (
                    <Link key={ item.id } to={`/blog/${item.id}`}>
                        <Card personaje={ item } />    
                    </Link>
                ))
                : <h3>Personajes no encontrados</h3>
            }
        </div>
    );
}

CardsComponents.propTypes = {
    personajes: PropTypes.array.isRequired,
}

export default CardsComponents;
