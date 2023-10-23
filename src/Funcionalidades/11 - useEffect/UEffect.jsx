import { useState , useEffect } from "react"
import { json } from "react-router-dom";

export const UEffect = () => {

    const [count,setCont] = useState(0);
    const [countB,setContB] = useState(10);
    const [user,setUser] = useState();

    
    // 1 - useEffet utilização
    // executa a cada render 
    useEffect(()=>{
        console.log("Roda a cada render ")
    });

    // 2 - array de dependências 
    // como segunda argumento um array como todos os states que eu quero ficar observando 
    useEffect(()=>{
        console.log("Só roda ao incrimentar valor  ")
    },[count]);

    // 3 - array de dependências  Vazio [ ]
    // quando a aplicação iniciar ele vai executar 
    // geralmente utilizados em dados externo como em uma api 
    // se a api for chamda fora do useEffect ela sera chamada a cada render do componente 
    useEffect( () => {
      console.log("só executa uma vez ")
    },[]);

    // 4 - clean up - limpeza de memoria function
    // conseito - pra não sobrecarregar a memoria , quando ago for exluido e não precisar mais estar armazenado
    useEffect( () => {
      const timer = setTimeout(()=>{
        console.log(`o incrementador foi alterado ${count} vezes`)
      },2000);

      return () =>{
        clearTimeout(timer);
      }
    },[count]);

    // 5 - fetch com useEffect 
      // dessa forma evito a requisição na api a cada renderização
    const token = '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';
      useEffect(()=>{
        
        fetch('https://api.github.com/users/leandroArraes', {
          headers: {
            Authorization: `token ${token}`,
          },
        })
          .then((response) => response.json())
          .then((json) => setUser(json))
          .catch((error) => {
            console.error('Erro:', error);
          });

      },[])


  return (

    <>
      <div>
          {/* função anonima para somar +1 */}
          <button  onClick={()=> setCont(prevCount => prevCount + 1)}>Renderizar A</button>
          <p>{count}</p>
      </div>
      <div>
          {/* função anonima para somar +1 */}
          <button  onClick={()=> setContB(prevCount => prevCount + 1)}>Renderizar B</button>
          <p>{countB}</p>
      </div>
      {user && (
          <div>
          <h1>Dados do usuário</h1>
          <p>{user.name}</p>
          <p>{user.bio}</p>
          <img src={user.avatar_url}  style={{ width: '300px', height: '300px', borderRadius: '100%' }}/>
          
          </div>

      )}
     
        

    </>
    

  )
}
