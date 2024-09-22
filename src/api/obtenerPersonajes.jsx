
export const obtenerPersonajes = async (/*url*/) => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        if(!res.ok){
            throw new Error(`HTTP error status: ${res.status}`);
        }
        const data = await res.json();
        return { personajes: data.results };
    } catch (error) {
        console.log(error.message);
    }
}