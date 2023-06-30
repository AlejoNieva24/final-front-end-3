import { DentistContext } from "../Components/utils/DentistContext"
import CardList from "../Components/CardList"
import { useContext} from "react"

export default function Favoritos(){
    const {favsDentistsLS} = useContext(DentistContext)

    return( 
        <div>
            {favsDentistsLS.length > 0 ?
            <CardList dentists={favsDentistsLS}/>
            :
            <h1>Agrega a tus dentistas favoritos</h1>
            }
        </div>
    )
}
