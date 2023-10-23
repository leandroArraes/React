import SayMyName from "../Funcionalidades/03 - props/SayMyName";
import { useState } from "react";

function Home(){
    const[setIn,setInput] = useState();
    return(
        <div>
        <h1>Home</h1>
        <h6>Aprendendo Props</h6>
        <SayMyName nome ="leandro" />

        <input type="text" value={setIn} onChange={(e) => setInput(e.target.value)}></input>
        <SayMyName nome ={setIn} /> 
    </div>

    )
}

export default Home;