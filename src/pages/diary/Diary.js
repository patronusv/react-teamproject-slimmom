import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useWindowWidth } from '@react-hook/window-size';
import DiaryProductList from '../../components/diaryProductList/DiaryProductList';
import DiaryAddProductForm from '../../components/diaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from '../../components/diaryDateCalendar/DiaryDateCalendar';
import { DiaryWrapper } from './DiaryStyle';
import Modal from '../../components/modal/Modal';
import modalActions from '../../redux/actions/modalActions';
import healthOperations from '../../redux/operations/healthOperations';
import RightSideBar from '../../components/rightSideBar/RightSideBar';

const Diary = () => {
  const onlyWidth = useWindowWidth();
  const size = useWindowSize();
  const dispatch = useDispatch();
  useEffect(() => {
    const date = new Date();
    const currentDate = moment(date).format('YYYY-MM-DD');
    setTimeout(() => {
      dispatch(healthOperations.getDayInfoOperation({ date: currentDate }));
    }, 300);
  }, []);
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
      <div className="container">
        <div className="diaryPage">
          <div className="formWrapper">
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
          </div>
          {onlyWidth >= 768 && <RightSideBar />}
        </div>
      </div>

      {onlyWidth < 768 && <RightSideBar />}
    </DiaryWrapper>
  );
};
export default Diary;
