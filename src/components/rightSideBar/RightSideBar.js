import React from 'react';
import RightSideBarStyled from './RightSideBarStyled';
import { useSelector } from 'react-redux';
import healthSelectors from '../../redux/selectors/healthSelectors';
import moment from 'moment';

const RightSideBar = () => {
  // const currenDate = new Date();
  // const currenDate = moment(Date.now()).format('DD.MM.YYYY');
  const currenDate = useSelector(healthSelectors.getDate);
  const daySummary = useSelector(healthSelectors.getDaySummary);
  const notAllowedProducts = useSelector(healthSelectors.getNotAllowedProducts);

  return (
    <>
      <RightSideBarStyled>
        <div className="rightSideBar">
          <div className="blockLeft">
            <h2 className="title">
              Сводка за{' '}
              {daySummary.date
                ? daySummary.date.split('-').reverse().join('.')
                : moment(currenDate).format('DD.MM.YYYY')}{' '}
            </h2>
            {daySummary ? (
              <ul className="list">
                <li className="listItem">
                  <p className="listItemText">
                    Осталось
                    <span className="listItemTextRight">
                      {daySummary.kcalLeft
                        ? (daySummary.kcalConsumed > daySummary.dailyRate
                            ? 0
                            : Math.round(daySummary.kcalLeft)) + ' ккал'
                        : '000 ккал'}
                    </span>
                  </p>
                </li>
                <li className="listItem">
                  <p className="listItemText">
                    Употреблено
                    <span className="listItemTextRight">
                      {daySummary.kcalConsumed
                        ? Math.round(daySummary.kcalConsumed) + ' ккал'
                        : '000 ккал'}
                    </span>
                  </p>
                </li>
                <li className="listItem">
                  <p className="listItemText">
                    Дневная норма
                    <span className="listItemTextRight">
                      {daySummary.dailyRate
                        ? Math.round(daySummary.dailyRate) + ' ккал'
                        : '000 ккал'}
                    </span>
                  </p>
                </li>
                <li className="listItem">
                  <p className="listItemText">
                    n% от нормы
                    <span className="listItemTextRight">
                      {daySummary.percentsOfDailyRate
                        ? Math.round(daySummary.percentsOfDailyRate) + ' %'
                        : '000 %'}
                    </span>
                  </p>
                </li>
              </ul>
            ) : (
              <ul className="list">
                <li className="listItem">
                  <p className="listItemText">
                    Осталось
                    <span className="listItemTextRight">000 ккал</span>
                  </p>
                </li>
                <li className="listItem">
                  <p className="listItemText">
                    Употреблено
                    <span className="listItemTextRight">000 ккал</span>
                  </p>
                </li>
                <li className="listItem">
                  <p className="listItemText">
                    Дневная норма
                    <span className="listItemTextRight">000 ккал</span>
                  </p>
                </li>
                <li className="listItem">
                  <p className="listItemText">
                    n% от нормы
                    <span className="listItemTextRight">000 ккал</span>
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="blockRight">
            <h2 className="title">Нерекомендуемые продукты</h2>
            {notAllowedProducts ? (
              <ul className="list scrollbar">
                {notAllowedProducts ? (
                  <li className="listItem">
                    <p className="listItemText scrollbarText">
                      {notAllowedProducts.slice(0, 20).join(', ')}
                    </p>
                  </li>
                ) : (
                  <li>
                    <p>Здесь будет отображаться Ваш рацион</p>
                  </li>
                )}
              </ul>
            ) : (
              <ul className="list">
                <li>
                  <p>Здесь будет отображаться Ваш рацион</p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </RightSideBarStyled>
    </>
  );
};

export default RightSideBar;
