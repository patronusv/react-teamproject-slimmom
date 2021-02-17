import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { DiaryFormWrapper } from './DiaryAddProductFormStyle';
import { addNewProductDairyOperation } from '../../redux/operations/healthOperations';
import DiaryDateCalendar from '../diaryDateCalendar/DiaryDateCalendar';
// import Modal from '../modal/Modal';

const DiaryAddProductForm = ({ gram, product, onSubmit, onChange }) => {
  const size = useWindowSize();
  // const idToken = useSelector((state) => state.auth.user.accessToken)
  // const dispatch = useDispatch();
  // const [state, setState] = useState({
  //   date: '',
  //   product: '',
  //   gram: '',
  // });


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


  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setState(prev => ({
  //     ...prev, [name]: value
  //   }))
  //   // console.log(state)
  // }

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // dispatch(addNewProductDairyOperation(state))
  //   axios.post(
  //     `https://slimmom-backend.goit.global/day?auth=${idToken}`,
  //     state
  //   )
  //     .then(response => console.log(response))
  //   setState({
  //     date: '',
  //     product: '',
  //     gram: '',
  //   })
  // }


  return (
    <>
      {/* <DiaryDateCalendar /> */}
      <DiaryFormWrapper>
        <form onSubmit={onSubmit} className='formDairyAddProduct'>
          <div className='inputBlockDairyAddProduct'>
            <label>
              <input type="text"
                name="product"
                value={product}
                onChange={onChange}
                placeholder='Введите название продукта'
                className='inputDairyAddProduct' />
            </label>
            <label>
              <input type="number"
                name="gram"
                value={gram}
                onChange={onChange}
                placeholder='Граммы'
                className='inputDairyAddProduct secondInputLength' />
            </label>
          </div>
          {product && (<select className='selectDairyAddProduct'>
            <option ></option>
          </select>)}
          <button type='submit' className='buttonDairyAddProduct'>
            {size.width < 768 ? 'Добавить' : '+'}
          </button>

        </form>
        {/* <Modal openModal={openModal} toggleModal={toggleModal} /> */}
      </DiaryFormWrapper>
    </>
  )
}

export default DiaryAddProductForm
