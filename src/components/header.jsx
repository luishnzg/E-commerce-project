import React from "react";
import { Link } from "react-router-dom";
import { CategoryButton } from "./buttons";
function Header () {
    return (
        
            <header>
                <nav>
                    <ul>
                        <li> <Link to='/'>Inicio </Link> </li>
                        <li> <CategoryButton/> </li>
                        <li>Vender</li>
                        <li>Usuario</li>
                    </ul>
                </nav>
            </header>
        
    )
}

export default Header