import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useContext} from 'react';
import { RecipeDetails } from '../../context/Index';


export default function Details(){

    const { id } = useParams();
    const [recipeData, setRecipeData] = useState([]);
    const [recipeIngredients,setRecipeIngredients] = useState();
    const {setNItems,nItems, fav, setFav} = useContext(RecipeDetails);


    async function fetchRecipeItem(){
        try{
            const response = await  fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await response.json();

            setRecipeData(data.data?.recipe);
            setRecipeIngredients(data.data?.recipe?.ingredients)
            
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        fetchRecipeItem()
    }, [])


    function handleAddToFavorite(getCurrentItem){
        // console.log("current id", getCurrentItem);
        let cpyFavoritesList = [...fav];
        const index = cpyFavoritesList.findIndex(item=> item.id === id)
    
        if(index === -1) {
          cpyFavoritesList.push(getCurrentItem)
          setNItems(nItems+1)
        } else {
          cpyFavoritesList.splice(index, 1)
          setNItems(nItems-1)
        }
    
        setFav(cpyFavoritesList)
      }
    
      console.log(fav, 'favoritesList');


    // console.log("This is single recipe data please open it ans use it", recipeIngredients);

    return(
    <div className='grid grid-cols-2 mt-12'>
            <div className='flex flex-col gap-10 items-center'>
                {
                    recipeData ?
                    <div><img src = {recipeData.image_url}/></div>
                    : null
                }

                <div>
                    <button 
                    className='bg-yellow-500 text-red-800 p-4 border border-red-800 rounded-3xl hover:bg-yellow-300'
                    onClick = {()=>{handleAddToFavorite(recipeData)}} >
                        {fav && fav.length > 0 && fav.findIndex(
                            (item) => item.id === recipeData.id
                            ) !== -1
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
                    </button>
                </div>

            </div>

        <div>
            {
                recipeIngredients ?
                recipeIngredients.map((dataItem, index)=>{
                    return(
                        <div key={index} className='border border-black mb-3 py-2 text-left pl-5'>
                           <div>
                                Quantity : {dataItem.quantity}
                           </div>
                           <div>
                             Unit : {dataItem.unit}
                            </div>
                            <div>
                             Description : {dataItem.description}
                            </div>
                        </div>
                    )
                })
                : null
            }
        </div>

        
    </div>
);
}