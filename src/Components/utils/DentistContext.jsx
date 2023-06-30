import { createContext, useEffect, useState } from "react";

export const DentistContext = createContext()

export default function DentistProvider(props){
    const [dentists, setDentists] = useState([])
    const [favsDentists, setFavsDentists] = useState([])
    const [favsDentistsLS, setFavsDentistsLS] = useState(JSON.parse(localStorage.getItem('dentists')))


    async function fetching() {
        const dentistsFetch = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
        setDentists(dentistsFetch)
        console.log(dentistsFetch);
    }

    useEffect(()=>{
        fetching()

        const data = localStorage.getItem('dentists');
        if (data) {
            setFavsDentists(JSON.parse(data));
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('dentists',JSON.stringify(favsDentists))
        setFavsDentistsLS(favsDentists)
    },[favsDentists])



    function like(id){
        if(favsDentists.some((dentist)=> dentist.id === id)){
            setFavsDentists( prevDentistFav => {
                return prevDentistFav.filter((dentist)=> dentist.id !== id)})
        } else{
            const dentistEncontrado = dentists.find((dentist)=> dentist.id === id)
            setFavsDentists( prevDentistFav => {
                return [...prevDentistFav, dentistEncontrado]
            })
        }
    }

    const value ={
        favsDentistsLS,
        dentists,
        like
    }

    return(
        <DentistContext.Provider value={value}>
            {props.children}
        </DentistContext.Provider>
    )

}

