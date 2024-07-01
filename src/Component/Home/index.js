import React ,{ useState} from 'react'
import {Hoome ,Container,Hometitle} from './style.js'
import { Link } from 'react-router-dom';
import './Hstyle.css';
const Home = () => {


   return (
      <Hoome>
         <Container className='container'>
            <Hometitle> Be creative!</Hometitle>
          
            <Link  to='/Explore_more'>
            <button className='Newbutton'> Explore more  </button>
            </Link>
 
         </Container>
      </Hoome>
   );









   
} 

export default Home;