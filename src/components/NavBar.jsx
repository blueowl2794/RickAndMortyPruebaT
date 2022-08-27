import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src={require('../img/Logo-RandM.png')} alt="RickAndMorty" Style='margin:32px;'/>
      </div>
      <div>
        <img src={require('../img/Icono de campana.png')} alt="Campana" Style='margin-right:32px;' />
        <Link to={'/'}>
          <img src={require('../img/Home.png')} alt="Home" Style='margin-right:32px;' />
        </Link>
      </div>
    </div>
  )
}

export default NavBar
