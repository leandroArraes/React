import style from './Pessoa.module.css'

function Pessoa({nome ,idade,profissao,foto}){

    return(
        <div>
            <img src={foto} alt={nome} className={style.imageStyle} ></img>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;