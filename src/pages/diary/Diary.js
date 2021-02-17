import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import DiaryProductList from '../../components/diaryProductList/DiaryProductList';
import DiaryAddProductForm from '../../components/diaryAddProductForm/DiaryAddProductForm'
import DiaryDateCalendar from '../../components/diaryDateCalendar/DiaryDateCalendar'
import { DiaryWrapper } from './DiaryStyle';

const Diary = () => {
    const size = useWindowSize();
    // const idToken = useSelector((state) => state.auth.user.accessToken)
    const dispatch = useDispatch();
    const [state, setState] = useState({
        date: '',
        product: '',
        gram: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev, [name]: value
        }))
        console.log(state)
    }

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch(addNewProductDairyOperation(state))

    }

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/


        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount

        return windowSize;
    }

    return (
        <DiaryWrapper>
            <DiaryDateCalendar onChange={handleChange} />
            <DiaryAddProductForm gram={state.gram} product={state.product} nSubmit={handleSubmit} onChange={handleChange} />
            <DiaryProductList />
            {size.width < 768 && (<button type='submit' className='buttomDiaryProductList'>+
            </button>)}
        </DiaryWrapper>
    )
}

export default Diary
