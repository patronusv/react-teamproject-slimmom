import React, { useState, useEffect } from 'react';
import { debounce } from 'debounce';
import { useSelector, useDispatch } from 'react-redux';
import { DiaryFormWrapper } from './DiaryAddProductFormStyle';
import healthOperations from '../../redux/operations/healthOperations';
import modalActions from '../../redux/actions/modalActions';
import healthSelectors from '../../redux/selectors/healthSelectors';

const DiaryAddProductForm = () => {
  const debounce = require('debounce');
  const size = useWindowSize();
  const date = useSelector(healthSelectors.getDate);
  const products = useSelector(healthSelectors.getProducts);

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
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
    if (products.some(product => product.title.ru.includes(value))) {
      setState(prev => ({
        ...prev,
        productId: products.find(product => {
          return product.title.ru === value;
        })?._id,
      }));
    } else {
      debounce(
        dispatch(healthOperations.getProductOperation(state.productName)),
        2000,
      );
    }
    console.log(state);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(date);
    dispatch(
      healthOperations.postEatenProductOperation({
        date,
        productId: state.productId,
        weight: state.weight,
      }),
    );
    setState({
      productName: '',
      weight: '',
      productId: '',
    });
    dispatch(modalActions.offModal());
  };

  return (
    <>
      <DiaryFormWrapper>
        <form onSubmit={handleSubmit} className="formDairyAddProduct">
          <div className="inputBlockDairyAddProduct">
            <input
              type="text"
              list="browsers"
              value={state.productName}
              name="productName"
              id="fav"
              onChange={handleChange}
              placeholder="Введите название продукта"
              className="inputDairyAddProduct"
            />
            <datalist id="browsers">
              {products.map(product => (
                <option key={product._id} value={product.title.ru}>
                  {product.title.ru}
                </option>
              ))}
            </datalist>
            <label>
              <input
                type="number"
                name="weight"
                value={state.weight}
                onChange={handleChange}
                placeholder="Граммы"
                className="inputDairyAddProduct secondInputLength"
              />
            </label>
          </div>
          <button type="submit" className="buttonDairyAddProduct">
            {size.width < 768 ? 'Добавить' : '+'}
          </button>
        </form>
      </DiaryFormWrapper>
    </>
  );
};

export default DiaryAddProductForm;
