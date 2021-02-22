import styled from 'styled-components';

export const NotifWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 14px;
  color: black;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 250px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 40px;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 auto;
    margin-bottom: 15px;
  }

  ${props =>
    props.error &&
    ` 
      background-color: pink;;
      
    `}
  ${props =>
    props.alert &&
    ` 
        background-color: #fc842d;
        font-family: Gotham Pro;
        font-weight: bold;
        font-size: 14px;
        line-height: 13px;
        letter-spacing: 0.04em;
        color: white;
        margin: 0 auto;
        margin-bottom: 10px;
      
        box-shadow: 0px 4px 10px rgba(252,132,45,0.5);
        border-radius: 20px;
        border: none;
        outline: none;

        @media screen and (min-width: 768px) {
          width: max-content;
          margin-bottom: 15px;
          
      }
      
    `};
`;
