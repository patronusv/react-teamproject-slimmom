import styled from "styled-components";

export const UL = styled.ul`
    list-style:none;
    max-height: 256px;
    overflow: hidden;
    overflow-y: scroll;
    margin-top: 31px;
    padding-right: 12px;

    @media screen and (min-width:768px){
        padding-right:31px;
    }
    @media screen and (min-width:1280px){
        width: 530px;
        padding-right:42px;
        max-height: 200px;
    }

`

export const ListWrapper = styled.div`
    position: relative;
`

export const MaskWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 10px;
    bottom:0;
    left:0;
    
    /* background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 42.19%); */
`

