import React from 'react'
import { LI } from './DiaryProductItemStyle'
import CloseIcon from './CloseIcon'


const DiaryProductItem = ({onClick}) => {
    return (
        <>
            {/* <LI >
                <ul className='innerListDairyProduct'>
                    <li className='innerItemDairyProduct'>Банан</li>
                    <li className='innerItemDairyProduct'>100 г</li>
                    <li className='innerItemDairyProduct'>300 ккал</li>
                </ul>
                <button className='buttonItemDairyProduct'><CloseIcon /></button>
            </LI> */}
            <LI>
                <ul className='innerListDairyProduct'>
                    <li className='innerItemDairyProduct'>Банан</li>
                    <li className='innerItemDairyProduct'>100 г</li>
                    <li className='innerItemDairyProduct'>300 ккал</li>
                </ul>

                <button className='buttonItemDairyProduct' type="button" onClick={onClick} data-id="9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d">
                    <CloseIcon onClick={onClick} data-id="9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"/>
                </button>
            </LI>
        </>
    )
}

export default DiaryProductItem
