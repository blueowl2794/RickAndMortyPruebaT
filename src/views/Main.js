import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo } from '../store/reducer'
import Info from '../components/Info'
import NavBar from '../components/NavBar'
import Table from '../components/Table'

const Main = () => {
  const { infos } = useSelector(state => state.info);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getInfo());
  },[]) 

  // console.log("infos", infos)

  return (
    <div>
      <NavBar/>
      <Info infos={infos}/>
      <Table infos={infos}/>
    </div>
  )
}

export default Main
