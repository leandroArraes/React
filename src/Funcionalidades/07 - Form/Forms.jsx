import { useState } from "react";

function Form(){
    
    function cadastrarUsuario(e){
        // resolvendo o problema do submet e reload da pagina e.
        e.preventDefault()
        console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
  
    }

    const[name,setName] = useState();
    const[password,setPassWprd] =useState();


    return(
        <div>
            <h3>Cadastro</h3>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <div>
                        <label htmlFor="name">Nome: </label>
                        <input type="text" id="name" placeholder="Digite seu Nome" onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div>
                    <label htmlFor="password">Senha: </label>
                        <input type="password" id="password" placeholder="Digite sua Senha" onChange={(e) => setPassWprd(e.target.value)}></input>
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar"></input>
                    </div>                                                  
                </div>
            </form>
        </div>
    )
}

export default Form;