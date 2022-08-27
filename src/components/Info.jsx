import React, { useState } from 'react'
import styles from './Info.module.css'
import { getInfo } from '../store/reducer'
import { useDispatch } from 'react-redux'

const Info = ({infos}) => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();
  const vivas = infos.filter(info => info.status ==="Alive")
  const muertas = infos.filter(info => info.status ==="Dead")
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
          <p>Total de personajes <b>{infos.length}</b> </p>
        </div>
        <div className={styles.divDos}>
          <p> <img src={require('../img/Icono de vivo.png')} alt="Vivo" /> Personajes Vivos  <b>{vivas.length}</b> </p> |
          <p> <img src={require('../img/Icono de muerto.png')} alt="Muerto" /> Personajes Muertos <b>{muertas.length}</b> </p>
        </div>
        <div >
          <form onSubmit={onSubmit} className={styles.divTres}>
            <img src={require('../img/Icono de busqueda.png')} alt="Icono" onSubmit={onSubmit}/>
            <input type="text" placeholder='Buscar' onChange={onInputChange}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Info
