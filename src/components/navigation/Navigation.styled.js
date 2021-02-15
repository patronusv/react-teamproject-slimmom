import styled from "styled-components";

export const NavListContainer=styled.ul`
    display:flex;
    list-style: none;
    margin: 0;
    
    .nav-list-item:not(:last-child){
        margin-right: 15px;
       
    }

    .link{
        color: grey;
        font-weight: bold;
        font-size: 14px;
        line-height: 13px;
        text-align: right;
        letter-spacing: 0.04em;
    }

    .activeLink{
        color: black;
        font-weight: bold;
        font-size: 14px;
        line-height: 13px;
        text-align: right;
        letter-spacing: 0.04em;
    }
    
`