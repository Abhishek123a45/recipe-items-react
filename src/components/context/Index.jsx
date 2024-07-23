import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const RecipeDetails = createContext(null);


export default function RecipeItemGlobalContext({children}){

    const [recipeData, setRecipeData] = useState([]);
    const [singleRecipeData, setSingleRecipeData] = useState([]);
    const [param, setParam] = useState('');
    const [fav, setFav] = useState([]);
    const [nItems, setNItems] = useState(0);

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try{
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${param}`);
            const data = await response.json();

            setRecipeData(data.data?.recipes);
            navigate('/')
            setParam('')
            // console.log(data)
        }
        catch(e){
            console.log(e)
        }
    }


    return(
    <RecipeDetails.Provider
        value={
            {
                recipeData,
                handleSubmit,
                param,
                setParam,
                singleRecipeData,
                setSingleRecipeData,
                fav,
                setFav,
                setNItems,
                nItems
            }
        }
    >
        {children}
    </RecipeDetails.Provider>

    )
}