import React from 'react'
import { LI } from './DiaryProductItemStyle'
import CloseIcon from './CloseIcon';


const DiaryProductItem = ({onClick,title,kcal,weight,id,screenWidth}) => {
    const vowels=['а','о','э','и','у','ы','е','ё','ю','я'];
 
    return (
        <>
            <LI>
                <ul className='innerListDairyProduct'>
                    <li className='innerItemDairyProduct'>
                        {screenWidth<768 ? 
                        (<ul style={{listStyle:"none"}}>
                            {title.split(" ").map(word=>(
                            <li key={word}>
                                {word.length>9 ? vowels.some(letter=>letter === word[9]) ? 
                                word.slice(0,9)+'.' : word.slice(0,10) + "." : word}
                            </li>
                        ))}
                        </ul>) : (
                           <span>{title}</span> 
                        )}
                    </li>
                    <li className='innerItemDairyProduct'>{weight}г</li>
                    <li className='innerItemDairyProduct'>{kcal.toFixed(0)}ккал</li>
                    <li className='innerItemDairyProduct'>
                        <button className='buttonItemDairyProduct' type="button" onClick={onClick} data-id={id}>
                            &#10005;
                        </button>
                    </li>
                </ul>

               
            </LI>
        </>
    )
}

export default DiaryProductItem
