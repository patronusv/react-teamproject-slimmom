import styled from "styled-components";

export const HeaderContainer=styled.header`
    display:flex;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #E0E0E0;

    @media (min-width: 1280px) {
        justify-content: flex-start;
        align-items: center;
        border-bottom: none;
    }
`

export const Nav=styled.nav`
    display:flex;
    position: relative;


    @media (max-width: 1279px){
       display: ${ props => props.isAuth? 'none':'block'};
    }

    @media (min-width: 1280px){
        transform: translateY(24px);
        margin-left: 44px;

        &::before{
            content:"";
            display: block;
            width: 2px;
            height:32px;
            background-color: grey;
            position: absolute;
            top:0;
            left:-43px;
            margin-left: 22px;
        }
    }
`

export const Container=styled.div`
    width: 90%;
    display:flex;
    align-items: center;
    justify-content:space-between;

    @media (min-width: 1280px) {
        justify-content: flex-start;
        align-items: center;
    }
`

export const BurgerButton=styled.button`
    display: block;

     @media (min-width: 1280px) {
        display: none;
    }

`

