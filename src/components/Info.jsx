import React, { useState } from 'react'
import styles from './Info.module.css'
import { getInfo } from '../store/reducer'
import { useDispatch } from 'react-redux'

const Info = ({infos}) => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();
  const vivas = infos?infos.filter(info => info.status ==="Alive"):null
  const muertas = infos?infos.filter(info => info.status ==="Dead"):null
  // console.log("vivas",vivas)
  // console.log("muertas",muertas)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(getInfo(search));
  }
  const onInputChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value);
  
  }

  return (
    <div className={styles.info}>
      <div className={styles.subInfo}>
        <img src={require('../img/camera-movie.png')} alt="Camara" Style='height:2em' />
        <h1>Personajes</h1>
      </div>
      <div className={styles.subInfo}>
        <div className={styles.divUno}>
          <p>Total de personajes <b>{infos?infos.length:0}</b> </p>
        </div>
        <div className={styles.divDos}>
          <p> <img src={require('../img/Icono de vivo.png')} alt="Vivo" /> Personajes Vivos  <b>{vivas?vivas.length:0}</b> </p> |
          <p> <img src={require('../img/Icono de muerto.png')} alt="Muerto" /> Personajes Muertos <b>{muertas?muertas.length:0}</b> </p>
        </div>
        <div >
          <form onSubmit={onSubmit} className={styles.divTres}>
            <img src={require('../img/Icono de busqueda.png')} alt="Icono" onClick={onSubmit}/>
            <input type="text" placeholder='Buscar' onChange={onInputChange} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Info
