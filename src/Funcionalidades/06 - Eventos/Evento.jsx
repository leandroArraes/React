import Button from "../../Components/Button"
import SayMyName from "../03 - props/SayMyName";
import { useState } from "react";

function Evento({numero}){

    function meuEvento(){

        console.log(`Botão com props! ${numero} `)
    }

    function meuSegundoEvento(){
        console.log(`segundo botão `)
    }

    const[setIn,setInput] = useState();
    return(
        <div>
            <p>
                Clique para disparar um evento:
            </p>          
            <button onClick={meuEvento}>Ativar</button>
            <Button event={meuEvento} text="primeiro Botão" />
            <Button event={meuSegundoEvento} text="Segundo Evento" />

            <div>
            <input type="text" value={setIn} onChange={(e) => setInput(e.target.value)}></input>
            <SayMyName nome ={setIn} /> 
            </div>

        </div>

    )
}

export default Evento;