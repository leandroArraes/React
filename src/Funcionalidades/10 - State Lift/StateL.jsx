function StateL({SetNome}){
    return(
        <div>
            <h1>State Lift</h1>
            <p>Digite o seu nome</p>
            <input type="text" onChange={(e)=> SetNome(e.target.value)}/>
        </div>
    )
}

export default StateL;