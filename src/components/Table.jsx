import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Table.module.css'

const Table = ({infos}) => {

  return (
    <div className={styles.table}>
      <table className={styles.onTable}>
        <tr className={styles.onTableTop}>
          <th>Nombre</th>
          <th>Vivo</th>
          <th>Especie</th>
          <th>Genero</th>
          <th>Origen</th>
          <th>Locación</th>
          <th>Capitulos</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
        {
          infos?infos.map((a) => (
            <tr>
              <td>{a.name}</td>
              <td>{(a.status==="Alive")? <img src={require('../img/Icono de vivo.png')} alt="Vivo" />  : (a.status==="Dead")?<img src={require('../img/Icono de muerto.png')} alt="Vivo" />: "--"}</td>
              <td>{a.species}</td>
              <td>{a.gender}</td>
              <td>{a.origin.name}</td>
              <td>{a.location.name}</td>
              <td>{a.episode.length}</td>
              <td>{a.created.slice(0,10)}</td>
              <td><Link to={`/${a.id}/`}> <img src={require('../img/Icono imagen.png')} alt="img" /> Acciones</Link></td>
            </tr>
          )):null
        }
        
      </table>
    </div>
  )
}

export default Table
