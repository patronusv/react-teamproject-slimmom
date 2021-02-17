import React from 'react'
import DiaryProductItem from './diaryProductItem/DiaryProductItem'
import { UL } from './DiaryProductListStyle'


const DiaryProductList = () => {


  return (
    <>
      <UL>
        <DiaryProductItem />
      </UL>
      <div id="wrapper">
        <div className="scrollbar" id="style-default">
          <div className="force-overflow"></div>
        </div>
        <div className="scrollbar" id="style-4">
          <div className="force-overflow"></div>
        </div>
      </div>
    </>
  )
}



export default DiaryProductList



