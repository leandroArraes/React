import SayMyName from "../Funcionalidades/03 - props/SayMyName";
import Pessoa from "../Funcionalidades/04 - props 2/Pessoa";


function Props(){
    
    const img = 'src/assets/eu.jpg'

   

    return(
    <>
       
        <h1>Aprendendo Props</h1>

        <SayMyName nome ="leandro" />
        <SayMyName nome ="Ana" />   

        <h5>Uma forma mais complexa</h5>
        <Pessoa nome="Leandro" idade="32" profissao="dev" foto={img}/>

      
        
    </>

    )
}



export default Props;