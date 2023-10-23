import { useState } from "react";
import StateL from "../Funcionalidades/10 - State Lift/StateL";
import Saudacao from "../Funcionalidades/10 - State Lift/Saudacao";

function StateLift(){
    
    const[Snome,SetNome] = useState();
    
    return(
        <>
           <StateL SetNome={SetNome}/>
           <h1>{Snome}</h1>
           <Saudacao nome={Snome}/>
        </>
    )
}

export default StateLift;