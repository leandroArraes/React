import React from "react";
 import { Link } from "react-router-dom";

function Contato(){
    return(
        <div>
        <h1>Contatos</h1>
        <p>
            <Link  to="/contato/1"> Formas de contato 1</Link>
        </p>
        <p>
            <Link  to="/contato/2"> Formas de contato 2</Link>
        </p>
        <p>
            <Link  to="/contato/3"> Formas de contato 3</Link>
        </p>
    </div>
    )
}

export default Contato;