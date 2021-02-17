import React from 'react'
import { LI } from './DiaryProductItemStyle'
import CloseIcon from './CloseIcon'


const DiaryProductItem = ({onClick,title,kcal,weight}) => {
    return (
        <>
            <LI>
                <ul className='innerListDairyProduct'>
                    <li className='innerItemDairyProduct'>{title}</li>
                    <li className='innerItemDairyProduct'>{weight}</li>
                    <li className='innerItemDairyProduct'>{kcal}</li>
                </ul>

                <button className='buttonItemDairyProduct' type="button" onClick={onClick}>
                    <span>&#10005;</span>
                    {/* <CloseIcon/> */}
                </button>
            </LI>
        </>
    )
}

export default DiaryProductItem
