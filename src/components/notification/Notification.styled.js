import styled from 'styled-components';

export const NotifWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 5px;
    font-size: 14px;
    background-color: lightgreen;
    color: black;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 15px;

    @media screen and (min-width:768px){
        width: 500px;
        height: 40px;
        font-size: 14px;
        
    }

    @media screen and (min-width: 1280px){
        margin: 0;
        margin-bottom: 15px;
    }

    ${props =>
    props.error &&
    ` 
      background-color: pink;;
      
    `}
    
    
`