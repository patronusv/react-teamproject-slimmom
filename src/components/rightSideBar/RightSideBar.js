import React from 'react';
import RightSideBarStyled from './RightSideBarStyled';
import { useSelector } from 'react-redux';
import healthSelectors from '../../redux/selectors/healthSelectors';
// import getNotAllowedProducts from '../../redux/selectors/healthSelectors';

// const initialState = {
//   kcalLeft: 0,
//   kcalConsumed: 0,
//   dailyRate: 0,
//   percentsOfDailyRate: 0,
// };

const RightSideBar = () => {
  const currenDate = new Date();
  const daySummary = useSelector(healthSelectors.getDaySummary);
  const notAllowedProducts = useSelector(healthSelectors.getNotAllowedProducts);
  // const notAllowedProducts = useSelector(getNotAllowedProducts);

  return <>
    <RightSideBarStyled>
      <div className='rightSideBar'>
        <div className='blockLeft'>
          <h2 className='title'>Сводка за {daySummary.date ? daySummary.date : (currenDate.getDate() + '.' + (currenDate.getMonth() + 1) + '.' + currenDate.getFullYear())} </h2>
          {daySummary ?
            <ul className='list'>
              <li className='listItem'>
                <p className='listItemText'>Осталось
              <span className='listItemTextRight'>

                    {daySummary.kcalLeft ? ((daySummary.kcalConsumed > daySummary.dailyRate ? 0 : daySummary.kcalLeft) + ' ккал') : '000 ккал'}
                  </span>
                </p>
              </li>
              <li className='listItem'>
                <p className='listItemText'>Употреблено
            <span className='listItemTextRight'>
                    {daySummary.kcalConsumed ? ((daySummary.kcalConsumed) + ' ккал') : '000 ккал'}
                  </span>
                </p>
              </li>
              <li className='listItem'>
                <p className='listItemText'>Дневная норма
            <span className='listItemTextRight'>
                    {daySummary.dailyRate ? ((daySummary.dailyRate) + ' ккал') : '000 ккал'}
                  </span>
                </p>
              </li>
              <li className='listItem'>
                <p className='listItemText'>n% от нормы
            <span className='listItemTextRight'>
                    {daySummary.percentsOfDailyRate ? ((Math.round(daySummary.percentsOfDailyRate)) + ' %') : '000 ккал'}
                  </span>
                </p>
              </li>
            </ul>
            :
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
          }
        </div>
        <div className='blockRight'>
          <h2 className='title'>Нерекомендуемые продукты</h2>
          {notAllowedProducts ?
            <ul className='list'>
              {notAllowedProducts ?
                <li className='listItem'><p className='listItemText'>{notAllowedProducts.slice(0, 5).join(', ')}</p></li>
                : <li><p>Здесь будет отображаться Ваш рацион</p></li>
              }
            </ul> :
            <ul className='list'>
              <li><p>Здесь будет отображаться Ваш рацион</p></li>
            </ul>
          }
        </div>
      </div>
    </RightSideBarStyled>
  </>;
};

export default RightSideBar;




















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
