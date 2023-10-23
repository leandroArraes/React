import style from './frase.module.css'

function Frase(){
        return(
        <div className={style.fraseContainer}>            
            <p className={style.fraseContent}> Minha frase</p>            
        </div>
    )
}

export default Frase