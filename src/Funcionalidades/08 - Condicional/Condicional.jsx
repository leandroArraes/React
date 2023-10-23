import { useState } from "react";

function Condicional(){

    const [email,setEmail]= useState('');
    const [userEmail,setUserEmail] = useState('');


    // e = dar acesso a um evento 
    // Em resumo, e.preventDefault() é usado para controlar o comportamento padrão de eventos, 
    // como o envio de formulários,
    //  e permitir que você execute código personalizado antes que o comportamento padrão ocorra.
    
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>Enviar E-mail</button>
            </form>
            {userEmail && (
                <div>
                    O email do usuario é: {userEmail}
                    <button onClick={limparEmail}>Limpar E-mail</button>
                </div>
            )}
        </div>

    )
}
export default Condicional;