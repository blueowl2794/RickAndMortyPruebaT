import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import NavBar from '../components/NavBar'
import { searchById } from '../helps/helps'
import styles from './Detail.module.css'

const Detail = () => {

    const [data, setData ] = useState("")
    let {id} = useParams()

    useEffect(() => {
        searchById(id,setData )
        // (async () => {
        //    await fetch('https://rickandmortyapi.com/api/character/'+id)// solo se hizo asi para hacer una funcion async dentro de useEffect, se que es una mala practica
        //     .then((response) =>  response.json()
        //     )
        //     .then(i => setData(i))
            
        // })();
          
    }, [])

  return (
    <div>
        <NavBar/>

        {
            data?
                <div className={styles.container}>
                    <div className={styles.img}>
                        <img src={data.image} alt="Img" />
                    </div>
                    <p className={styles.name}>{data.name}</p>
                    <p>Origen: {data.origin.name}</p>
                    <p>Especie: {data.species}</p>
                    <p>Vivo: {(data.status==="Alive")?<img src={require('../img/Icono de vivo.png')} alt="Status" />:(data.status==="Dead")?<img src={require('../img/Icono de muerto.png')} alt="Status" />:"--"}</p>

                </div>: null
            
        }


      
    </div>
  )
}

export default Detail
