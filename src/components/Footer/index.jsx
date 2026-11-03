import { Comteiner } from "./style.js";

export default function Footer(){
 return(
    <Comteiner>
        <p>
            &copy:{new Date().getFullYear} -Todos os direitos reservados 
        </p>
    </Comteiner>
 )
}