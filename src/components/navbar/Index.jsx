import React, { useState } from 'react';
import { useContext } from 'react';
import { RecipeDetails } from '../context/Index';
import { Link } from 'react-router-dom';



export default function Navbar(){

    const {handleSubmit, setParam, nItems, param} = useContext(RecipeDetails);

    return(
    <div className='flex justify-between items-center mt-8 mb-20'>

        <div className="text-2xl text-green-950 font-semibold hover:text-green-800">
            <Link to={'/'}>
                Home
            </Link>
        </div>


        <div className="searchbar w-3/5">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={param}
                className='border border-gray-500 rounded-lg w-full p-5 text-lg text-yellow-500'
                onChange={(e)=>{setParam(e.target.value)}}
                />

            </form>
        </div>
        <div className='relative text-2xl text-green-950 font-semibold hover:text-green-800'>
            <Link to={'/fav'}>
                Favourites<span className='absolute top-[-10px] px-2 rounded-full text-lg bg-red-500 text-white'>{nItems}</span>
            </Link>
            
        </div>
    </div>
);
}