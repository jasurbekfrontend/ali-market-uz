import React from 'react';
import { Link } from'react-router-dom';
import katalog from '../assets/svg/katalog.svg'
import home from '../assets/svg/home.svg'
import { BsCart3 } from "react-icons/bs";


const  Navigator = () => {
    return (
        <div className='navigator'> 
        <Link>
        <img src={home} alt="" />
        </Link>
        <Link>
        <img src={katalog} alt="" />
        </Link>
        <Link>
        <BsCart3 />
        </Link>
        <Link>
        
        </Link>
        </div>
    );
};


export default  Navigator;