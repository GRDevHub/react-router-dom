import PropTypes from 'prop-types';
import Card from './Card';
import { Link, useSearchParams } from 'react-router-dom';

const CardsComponents = ({ personajes }) => {

    const [searchParams, serSearchParams] = useSearchParams();

    const handleChange = (e) => {
        let filter = e.target.value;
        serSearchParams({ filter: filter })
    };

    return (
        <div className='mt-4 row row-cols-1 row-cols-md-3 g-4 border justify-content-center'>
            <input 
                className='form-control mb-2' 
                type='text' 
                placeholder='Personaje...'
                onChange={ handleChange } 
                value={ searchParams.get('filter') ? searchParams.get('filter') : '' } 
            />
            {   personajes
                .filter( item => {
                    let filter = searchParams.get('filter');
                    let name = item.name.toLowerCase();

                    if(!filter){
                        return true;
                    }else{
                        return name.startsWith(filter.toLowerCase());
                    }
                })
                .map( item => (
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
