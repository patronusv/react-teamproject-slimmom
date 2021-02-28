import styled from 'styled-components';

export const NavListContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  & :hover,
  :focus,
  :active {
    color: white;
  }

  ${props =>
    props.isActive &&
    ` 
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: 112px;
      margin: 0px auto;

        @media screen and (min-width: 320px) and (max-width: 767px) {
            width: 280px;
            margin-top: 140px;  
        }

        @media screen and (min-width: 768px) and (max-width: 1279px) {
            width: 306px;
            margin-top: 188px;
        }
    `}

  .nav-list-item:not(:last-child) {
    margin-right: 15px;
  }

  .nav-list-item-hidden {
    display: none;
  }

  .link {
    color: grey;
    font-weight: bold;
    font-size: 14px;
    line-height: 13px;
    text-align: right;
    letter-spacing: 0.04em;

    ${props =>
      props.isActive &&
      ` 
        font-family: Verdana;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #9B9FAA;
        :hover, :focus, :active { color: white; }
        @media screen and (min-width: 320px) and (max-width: 767px) {
            font-size: 18px;
            line-height: 22px;;   
        }
        
    `}
  }

  .activeLink {
    color: black;
    font-weight: bold;
    font-size: 14px;
    line-height: 13px;
    text-align: right;
    letter-spacing: 0.04em;

    ${props =>
      props.isActive &&
      ` 
        font-family: Verdana;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #9B9FAA;
        :hover, :focus, :active { color: white; }
        @media screen and (min-width: 320px) and (max-width: 767px) {
            font-size: 18px;
            line-height: 22px;;   
        }
        
    `}
  }
`;
