import{card,info} from "./style.js"

export default function showcard({title,image,lamguge}){
    // imagem gernerica
    const defautImage = "https://via.placeholder.com/210x295?text=sem+Image";

    return(
        <card>
            <img src={image || defautImage} alt={title} />
            i
        </card>
    )
}