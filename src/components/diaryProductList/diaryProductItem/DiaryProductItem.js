import React from 'react'
import { LI } from './DiaryProductItemStyle'
import CloseIcon from './CloseIcon'


const DiaryProductItem = ({onClick,title,kcal,weight,id}) => {
    return (
        <>
            <LI>
                <ul className='innerListDairyProduct'>
                    <li className='innerItemDairyProduct'>{title}</li>
                    <li className='innerItemDairyProduct'>{weight}г</li>
                    <li className='innerItemDairyProduct'>{kcal.toFixed(0)}ккал</li>
                    <li className='innerItemDairyProduct'>
                        <button className='buttonItemDairyProduct' type="button" onClick={onClick} data-id={id}>
                            &#10005;
                    {/* <CloseIcon/> */}
                        </button>
                    </li>
                </ul>

               
            </LI>
        </>
    )
}

export default DiaryProductItem
