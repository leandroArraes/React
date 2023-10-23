import RenderizarLista from "../Funcionalidades/09 - List-Render/RenderizarListas";

function Listrender(){
    const familia = ['leandro','Ana','Sofia','Jasmim','Petunia'];

    return(
        <>
            <RenderizarLista itens={familia}/>
            {/* passando uma lista vazia para a renderização */}
            {/* <RenderizarLista itens={[]}/> */}
        </>
    )
}

export default Listrender;