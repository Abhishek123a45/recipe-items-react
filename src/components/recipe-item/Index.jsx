import React, { useState } from 'react';
import {Link} from 'react-router-dom'


export default function RecipeCard({dataItem, index}){
    return(
        
        <div key={index} className='rounded-lg shadow-[0_10px_10px_rgba(0,0,0,_0.7)]'>
                            <div className='w-4/5 flex  justify-between items-center gap-5  pl-5 py-5 '>

                                <div className='w-[50%] h-full'>
                                    <img className = "h-[200px]" src= {dataItem.image_url} alt="image_url" />
                                </div>

                                <div className='flex flex-col justify-center items-start w-[50%] h-full '>

                                    <div className='h-20 text-base  text-green-800'>{dataItem.title}</div>
                                    <div className='text-sm text-red-900  h-8'>{dataItem.publisher}</div>
                                    <div >
                                        <Link to ={`/details/${dataItem.id}`}>
                                            <button 
                                            className='bg-yellow-500 text-red-600 active:bg-gray-500 p-3 '>
                                                Show Details
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>


);
}