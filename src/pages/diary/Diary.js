import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DiaryProductList from '../../components/diaryProductList/DiaryProductList';
import DiaryAddProductForm from '../../components/diaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from '../../components/diaryDateCalendar/DiaryDateCalendar';
import { DiaryWrapper } from './DiaryStyle';
import Modal from '../../components/modal/Modal';
import modalActions from '../../redux/actions/modalActions';

const Diary = () => {
  const size = useWindowSize();
  const dispatch = useDispatch();

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

  const handleClick = () => {
    dispatch(modalActions.onModal());
  };

  return (
    <DiaryWrapper>
      <DiaryDateCalendar />
      {size.width < 768 ? (
        <Modal>
          <DiaryAddProductForm />
        </Modal>
      ) : (
        <DiaryAddProductForm />
      )}
      <DiaryProductList />
      {size.width < 768 && (
        <button
          type="submit"
          className="buttomDiaryProductList"
          onClick={handleClick}
        >
          +
        </button>
      )}
    </DiaryWrapper>
  );
};

export default Diary;
