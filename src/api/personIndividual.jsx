export const personIndividual = async (/*url*/{ params }) => {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
        if(!res.ok){
            throw new Error(`HTTP error status: ${res.status}`);
        }
        const data = await res.json();
        return { personajeInd: data };
    } catch (error) {
        console.log(error.message);
    }
}