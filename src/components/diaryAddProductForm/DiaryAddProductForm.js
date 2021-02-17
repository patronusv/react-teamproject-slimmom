import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { DiaryFormWrapper } from './DiaryAddProductFormStyle';
import healthOperations, { addNewProductDairyOperation } from '../../redux/operations/healthOperations';
import DiaryDateCalendar from '../diaryDateCalendar/DiaryDateCalendar';


const DiaryAddProductForm = () => {
  const size = useWindowSize();
  const date = useSelector(state => state.health.getDate.date)
  const product = useSelector(state => state.health.product)

  const dispatch = useDispatch();
  const [state, setState] = useState({
    productName: '',
    weight: '',
    productId: '',
  });


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


  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev =>
      ({ ...prev, [name]: value })
    )
    name === 'productName' && dispatch(healthOperations.getProductOperation(state.productName));
    console.log(state)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(date)
    dispatch(healthOperations.postEatenProductOperation({ date, productId: state.productId, weight: state.weight }))
    // dispatch(addNewProductDairyOperation(state))
    // axios.post(
    //   `https://slimmom-backend.goit.global/day?auth=${idToken}`,
    //   state
    // )
    //   .then(response => console.log(response))
    setState({
      productName: '',
      weight: '',
      productId: '',
    })
  }


  return (
    <>
      {/* <DiaryDateCalendar /> */}
      <DiaryFormWrapper>
        <form onSubmit={handleSubmit} className='formDairyAddProduct'>
          <div className='inputBlockDairyAddProduct'>
            <label>
              <input type="text"
                name="productName"
                value={state.productName}
                onChange={handleChange}
                placeholder='Введите название продукта'
                className='inputDairyAddProduct' />
            </label>
            <label>
              <input type="number"
                name="weight"
                value={state.weight}
                onChange={handleChange}
                placeholder='Граммы'
                className='inputDairyAddProduct secondInputLength' />
            </label>
          </div>
          {product.length ? (product.length < 20 ?
            (<select className='selectDairyAddProduct' onChange={handleChange} name='productId' value={state.productId}>
              <option>Выберите продукт из списка</option>
              {product.map(item => <option value={item._id}>{item.title.ru}</option>)}
            </select>) :
            <p>Введите более точное название</p>) : null}
          <button type='submit' className='buttonDairyAddProduct'>
            {size.width < 768 ? 'Добавить' : '+'}
          </button>

        </form>

      </DiaryFormWrapper>

    </>
  )
}

export default DiaryAddProductForm
