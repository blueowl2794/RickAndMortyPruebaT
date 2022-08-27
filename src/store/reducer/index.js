import { createSlice } from '@reduxjs/toolkit';

export const reduceSlice = createSlice({
    name: "info",

    initialState: {
        infos: [],
       
    },
    reducers: {
        setInfo:(state,action) => {
            
            state.infos = action.payload;  
        },
        
    },
});

export const { setInfo } = reduceSlice.actions;

export default reduceSlice.reducer;

export const getInfo = (name) => async(dispatch) => {
    const filtro = name?name:""
    const API = "https://rickandmortyapi.com/api/character?name=";//esta deberia estar en el .env(obvio...xd)

    await fetch(API+filtro)
    .then(res=> res.json())
    .then((c)=>{
        dispatch(setInfo(c.results));
    }).catch((err)=>{
        console.error(err);
    });
    
}
