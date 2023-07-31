import React from "react";
import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <header className="flex">
            <h1>Conduit</h1>
            <ul className="flex">
                <li> <NavLink to='/'> Home</NavLink></li>
               <li> <NavLink to='/login' >Sign in</NavLink></li>
               <li> <NavLink to='/signup' >Sign up</NavLink></li>
 
            </ul>



        </header>
    )

}
export default Header;