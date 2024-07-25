import { useContext } from "react"
import { MainCardContext } from "../MainCard/MainCard"
import { NameTitelComponent } from "./styles"

function NameTitle (){
    const data =useContext(MainCardContext)
    const title = `${data.firstName} ${data.lastName}`

    return <NameTitelComponent>{title}</NameTitelComponent>
}
export default NameTitle