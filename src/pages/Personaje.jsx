import { useLoaderData } from 'react-router-dom';

const Personaje = () => {
    let tamaño = { 
        width: '250px',
    };
    const { personajeInd } = useLoaderData();
    const { image, name, status } = personajeInd;
    return (
        <div className='container border row mx-auto'>
            <h1 className='text-primary mt-3 text-center'>    
                Personaje Individual
            </h1>
            <div className='col py-4'>
                <div className="card mx-auto" style={ tamaño }>
                    <img src={ image } className="card-img-top" alt={ name } />
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{ status }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personaje;