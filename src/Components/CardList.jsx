import { useContext } from "react"
import { DentistContext } from "../Components/utils/DentistContext"
import Card from "./Card"
import style from "../Styles/ComponentStyles/ListCard.module.css"

export default function CardList({dentists}){

    const {like} = useContext(DentistContext)

    return (
        <div className={style.CardList}>
            {dentists.map((dentist)=> {
                return( 
                    <Card userDetail={dentist} likeFunct={like} id={dentist.id} key={dentist.id}/>
                )
            })}
        </div>
    )
}