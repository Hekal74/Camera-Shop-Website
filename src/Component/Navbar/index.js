import React from 'react'
import { Link } from 'react-router-dom';
import './stylee.css';


const Navbar = () => {

    return(
            <div className='Navbarsection'>

                <div className='Containerr'>
                    <div className='Logo'>
                        <h2 className='LogoText'> <Link className='LINK' to='/'> Brainwave.io </Link>
                          </h2>    
                    </div>

                    <ul className='Ulist'>
                        <li className='ListItem'> <Link className='LINK' to='/'> Our shop </Link> </li>
                        <li className='ListItem'> <Link className='Anchor' to='/about'> About us </Link> </li>
                        <li className='ListItem'> <Link className='Anchor' to='news'> News </Link> </li>
                        <li className='ListItem'> <Link className='LINK' to='/contact'> Contact us </Link> </li>
                        <li className='ListItem'> <Link className='LINK' to='/login'> Login </Link> </li>
                        <li className='ListItem'> <Link className='LINK' to='/signup'> Register </Link> </li>

                        <li className='ListItem'> <Link className='Anchor' to='Arabic'> عربي </Link> </li>
                     
                    </ul>
                    
                <div className='bord'>
                    <br ></br>
                </div>

                </div>
                
            </div>
            )
} 

export default Navbar;