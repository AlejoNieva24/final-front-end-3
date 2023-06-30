import { useContext } from "react";
import CardList from "../Components/CardList";
import { DentistContext } from "../Components/utils/DentistContext.jsx";

export default function Home(){
    const {dentists} = useContext(DentistContext)
    return(<CardList Dentists={dentists}/>)
}