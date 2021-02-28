import React, { useState, useEffect } from 'react';
import { debounce } from 'debounce';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { DiaryFormWrapper } from './DiaryAddProductFormStyle';
import healthOperations from '../../redux/operations/healthOperations';
import modalActions from '../../redux/actions/modalActions';
import healthSelectors from '../../redux/selectors/healthSelectors';

const SignupSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, 'Уточните запрос!')
    .max(50, 'Слишком длинный запрос!')
    .required('Заполните название продукта'),
  weight: Yup.string()
    .min(2, 'Слишком малый вес!')
    .max(4, 'Слишком большой вес!')
    .required('Заполните вес'),
});

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

  const formik = useFormik({
    initialValues: { productName: '', weight: '', productId: '' },
    onSubmit: (values, actions) => {
      handleSubmit(values);
      actions.resetForm();
    },
    validationSchema: SignupSchema,
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
    formik.setFieldValue(name, value);

    if (name !== 'productName') return;
    if (products.some(product => product.title.ru.includes(value))) {
      formik.setFieldValue(
        'productId',
        products.find(product => {
          return product.title.ru === value;
        })?._id,
      );
    } else {
      debounce(
        dispatch(
          healthOperations.getProductOperation(formik.values.productName),
        ),
        2000,
      );
    }
  };

  const handleSubmit = ({ productName, ...rest }) => {
    dispatch(healthOperations.postEatenProductOperation({ ...rest, date }));
    dispatch(modalActions.offModal());
    // dispatch(healthOperations.getDayInfoOperation({ date }));
  };

  return (
    <>
      <DiaryFormWrapper>
        <form onSubmit={formik.handleSubmit} className="formDairyAddProduct">
          <div className="inputBlockDairyAddProduct">
            <input
              type="text"
              list="browsers"
              value={formik.values.productName}
              name="productName"
              id="productName"
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
                min="1"
                name="weight"
                id="weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
                placeholder="Граммы"
                className="inputDairyAddProduct secondInputLength"
              />
            </label>

            {formik.errors.productName && formik.touched.productName ? (
              <p className="validationError">{formik.errors.productName}</p>
            ) : null}
            {formik.errors.weight && formik.touched.weight ? (
              <p className="validationError weightError">
                {formik.errors.weight}
              </p>
            ) : null}
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
