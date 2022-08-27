export const searchById = async (id, setData) => {
    await fetch('https://rickandmortyapi.com/api/character/'+id) //esta deberia estar en el .env(obvio...xd)
     .then((response) =>  response.json()
     )
     .then(i => setData(i))
     
 }