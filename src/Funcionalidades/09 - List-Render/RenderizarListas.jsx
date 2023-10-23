function RenderizarLista({itens}){
    return(
        <>
            <h3>Lista de Pessoas</h3>
            {
                // esse if so vai entrar para fazer uma verificação de lista vazia, na explicação ele entrou em um segundo momento
                itens.length > 0 ? (


                // o ideal é o usaro o id para a key ao invex do index
                //caso isso não seja feito o console log ficara apresentando um erro de key
                itens.map((item,index)=>(                                             
                                <p key={index}> {index + 1 } - {item} </p>                          
                )) )
                :
                (<p>Lista Vazia</p>)
            }
        
        
        </>
    )
}

export default RenderizarLista;