import { Link } from "react-router-dom";

function NavBar(){
    return(
      <nav>

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
          <Link to="/contato">Contato</Link>
          </li>
          <li>
          <Link to="/ueffect">use Effect</Link>
          </li>
        </ul>
      </nav>

    )
}
export default NavBar;