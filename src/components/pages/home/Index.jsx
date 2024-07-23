import React, { useState } from 'react';
import { RecipeDetails } from '../../context/Index';
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import RecipeCard from '../../recipe-item/Index';




export default function Home(){
    const {recipeData} = useContext(RecipeDetails)

    console.log(recipeData)

    return(
        <div className='grid grid-cols-3 gap-x-10 gap-y-32'>
            {
                recipeData.length>0 ? 

                recipeData.map((dataItem, index)=>{
                    return(
                        <RecipeCard dataItem={dataItem} index={index}/>
                )
                })
                
                : <div className='text-red-500 text-2xl'>No recipe to show :| </div>
            }
        </div>
);
}