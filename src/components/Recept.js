import React from 'react'
import style from '../recipe.module.css'
export function Recept({img, title, callories,ingredients}) {
    return(<div className={style.recipe}>
        <h1 >{title}</h1>
        <img src={img} alt=""/>
        <p>Calories {callories.toFixed(2)}</p>
        <ol>
            {
                ingredients.map(e=> (
                    <li>{e.text}</li>
                ))
            }
        </ol>
    </div>)
}