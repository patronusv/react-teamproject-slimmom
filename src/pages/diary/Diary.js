import React from 'react'
import DiaryAddProductForm from '../../components/dailyCaloriesForm/DailyCaloriesForm'
import DiaryProductListItem from '../../components/diaryProductList/diaryProductListItem/DiaryProductListItem'

const Diary = () => {
    return (
        <div>
            <DiaryAddProductForm />
            <DiaryProductListItem />
        </div>
    )
}

export default Diary
