import React from 'react'
import { LI } from './DiaryProductItemStyle'
import CloseIcon from './CloseIcon'


const DiaryProductItem = () => {
    return (
        <>
            <LI >
                <ul className='innerListDairyProduct'>
                    <li className='innerItemDairyProduct'>Банан</li>
                    <li className='innerItemDairyProduct'>100 г</li>
                    <li className='innerItemDairyProduct'>300 ккал</li>
                </ul>
                <button className='buttonItemDairyProduct'><CloseIcon /></button>
            </LI>
            <LI >
                <ul className='innerListDairyProduct'>
                    <li className='innerItemDairyProduct'>Банан</li>
                    <li className='innerItemDairyProduct'>100 г</li>
                    <li className='innerItemDairyProduct'>300 ккал</li>
                </ul>
                <button className='buttonItemDairyProduct'><CloseIcon /></button>
            </LI>
        </>
    )
}

export default DiaryProductItem
