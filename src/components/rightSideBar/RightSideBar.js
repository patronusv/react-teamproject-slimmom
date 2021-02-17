import RightSideBarStyled from './RightSideBarStyled';
import axios from 'axios';

const initialState = {
  kcalLeft: 0,
  kcalConsumed: 0,
  dailyRate: 0,
  percentsOfDailyRate: 0,
};

const RightSideBar = ({ date, notAllowedProducts }) => {
  const currenDate = new Date();

  return <>
    <RightSideBarStyled>
      <div className='rightSideBar'>
        <div className='blockLeft'>
          <h2 className='title'>Сводка за {date ? date : (currenDate.getDate() + '.' + (currenDate.getMonth() + 1) + '.' + currenDate.getFullYear())} </h2>
          <ul className='list'>
            <li className='listItem'>
              <p className='listItemText'>Осталось
              <span className='listItemTextRight'>000 ккал</span>
              </p>
            </li>
            <li className='listItem'>
              <p className='listItemText'>Употреблено
            <span className='listItemTextRight'>000 ккал</span>
              </p>
            </li>
            <li className='listItem'>
              <p className='listItemText'>Дневная норма
            <span className='listItemTextRight'>000 ккал</span>
              </p>
            </li>
            <li className='listItem'>
              <p className='listItemText'>n% от нормы
            <span className='listItemTextRight'>000 ккал</span>
              </p>
            </li>
          </ul>
        </div>
        <div className='blockRight'>
          <h2 className='title'>Нерекомендуемые продукты</h2>
          <ul className='list'>
            <li><p>Здесь будет отображаться Ваш рацион</p></li>
          </ul>

        </div>
      </div>
    </RightSideBarStyled>
  </>;
};

export default RightSideBar;



const url = 'https://slimmom-backend.goit.global/';
axios.defaults.baseURL = url;

const getDailyRate = (userCharacteristics, userId) => {
  if (userId) {
    return axios.post(`/daily-rate/${userId}`, userCharacteristics);
  }
  return axios.post(`/daily-rate/`, userCharacteristics);
}

// const getDailyRating = userCharacteristics => dispatch => {
//   dispatch(userActions.getDailyRateRequest());

//   getDailyRate
//     .getDailyRate(userCharacteristics)
//     .then(({ data }) => {
//       return dispatch(userActions.getDailyRateSuccess(data));
//     })
//     .catch(err => dispatch(userActions.getDailyRateWithIdError(err)));
// };


















// ===================================================================

// import style from './RightSideBar.module.css';


// const RightSideBar = () => {
//   // const currenDate = new Date();

//   return <>
//     {/* <h2>hi</h2> */}
//     <div className={style.bgImageLogin}>
//       <div className={style.right__SideBar}>
//         <div className={style.block__left}>
//           <h2 className={style.title}>Сводка за </h2>
//           <ul className={style.list}>
//             <li className={style.list__item}>
//               <p className={style.list__item_text}>Осталось
//               <span className={style.list__item_text_right}>000 ккал</span>
//               </p>
//             </li>
//             <li className={style.list__item}>
//               <p className={style.list__item_text}>Употреблено
//             <span className={style.list__item_text_right}>000 ккал</span>
//               </p>
//             </li>
//             <li className={style.list__item}>
//               <p className={style.list__item_text}>Дневная норма
//             <span className={style.list__item_text_right}>000 ккал</span>
//               </p>
//             </li>
//             <li className={style.list__item}>
//               <p className={style.list__item_text}>n% от нормы
//             <span className={style.list__item_text_right}>000 ккал</span>
//               </p>
//             </li>
//           </ul>
//         </div>
//         <div className={style.block__right}>
//           <h2 className={style.title}>Нерекомендуемые продукты</h2>
//           <ul className={style.list}>
//             <li><p>Здесь будет отображаться Ваш рацион</p></li>
//           </ul>

//         </div>
//       </div>
//     </div>
//   </>;
// };

// export default RightSideBar;
