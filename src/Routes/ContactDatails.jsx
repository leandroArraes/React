import { useParams , useNavigate } from "react-router-dom"
import Button from "../Components/Button";
// com ess hook da para extrair as informações que vem da url
// o useNavegate é uma forma de redirecionamento 


export const ContactDatails = () => {
    const {id} = useParams();

    // redirect 
    const navigate = useNavigate();

    const handleContact = () =>{
        console.log("Contato Enviado")
        return navigate("/")
    }

  return (
    <div>
        <h1>Exibindo mais formações do contato {id} </h1>
       <button onClick={handleContact}>Envaiar mensagem</button>
    </div>
  )
}
