import React, { useState } from 'react';
import {useContext} from 'react';
import { RecipeDetails } from '../../context/Index';
import {Link} from 'react-router-dom'
import RecipeCard from '../../recipe-item/Index';


export default function Fav(){

    const {fav, recipeData} = useContext(RecipeDetails)

    const filteredRecipeData = recipeData 
  ? recipeData.filter(dataItem => fav.some(favItem => favItem.id === dataItem.id))
  : [];

    
    console.log(recipeData, "recipe data")
    console.log(filteredRecipeData, "filter recipe data")

    return(
        <div className='grid grid-cols-3 gap-x-5 gap-y-16'>
            {
                filteredRecipeData.length>0 ? 

                filteredRecipeData.map((dataItem, index)=>{


                    return(

                        
                        <RecipeCard index = {index} dataItem={dataItem}/>
                )
                })
                
                : <div>Nothing to show in fav</div>
            }
        </div>
);
}