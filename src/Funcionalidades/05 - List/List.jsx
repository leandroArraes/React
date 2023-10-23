import Item from "./Item";

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
              <Item marca="carro 1" ano_lancamento={1985} />
              <Item marca="carro 2"ano_lancamento={1998}/>
              <Item marca="carro 3" />
              <Item  />
            </ul>
        
        
        </>
    )
}

export default List;