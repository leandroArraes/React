import PropTypes from 'prop-types'

function Item({marca,ano_lancamento}){
    return(
        // usando o Fragment para diminuir o numero de divs
        <>
        <li> {marca} - {ano_lancamento} </li>
        <hr/>
        </>
        
       
    )
}

Item.propTypes ={
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca:'faltou a marca',
    ano_lancamento: 0,
}

export default Item;