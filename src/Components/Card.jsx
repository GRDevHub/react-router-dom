import PropTypes from 'prop-types'

const Card = ({ personaje }) => {
    const { image, name, status } = personaje;
    
    return (
        <div className="col">
            <div className="card">
                <img src={ image } className="card-img-top" alt={ name } />
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">{ status }</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    personaje: PropTypes.object.isRequired,
}

export default Card;
