import styled from "styled-components";

export const LI = styled.li`
margin-bottom:20px;
@media screen and (min-width:768px){
        margin-bottom:15.5px;
    }
.innerListDairyProduct{
    display:flex;
    list-style: none;
}
.innerItemDairyProduct{
padding-bottom:10px;
    font-family: Verdana;
font-style: normal;
font-size: 14px;
line-height: 1.21;
letter-spacing: 0.04em;

color: #212121;
border-bottom:1px solid #E0E0E0;
}
.innerItemDairyProduct:first-child{
    min-width:137px;
    @media screen and (min-width:768px){
        min-width:239px;
    }
}
.innerItemDairyProduct:nth-child(2){
    min-width:50px;
    text-align:right;
    @media screen and (min-width:768px){
        min-width:104px;
    }
}
.innerItemDairyProduct:last-child{
    min-width:60px;
    text-align:right;
    @media screen and (min-width:768px){
        min-width:104px;
    }
}
.innerItemDairyProduct:not(:last-child){
    margin-right:10px;
    @media screen and (min-width:768px){
        margin-right:31px;
    }
}

`