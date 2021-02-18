import styled from "styled-components";

export const LI = styled.li`
    margin-bottom:20px;
    display:flex;
    width: 100%;


    @media screen and (min-width:768px){
        margin-bottom:15.5px;
    }
    @media screen and (min-width:1280px){
        justify-content: space-between;
    }

    .innerListDairyProduct{
        width: 100%;
        display:flex;
        list-style: none;
        justify-content:space-between;
    }


    .innerItemDairyProduct{
        display:flex;
        justify-content: center;


        align-items: center;
        margin-right:10px;
        padding-bottom:5px;
        font-family: Verdana;
        font-style: normal;
        font-size: 14px;
        line-height: 1.21;
        letter-spacing: 0.04em;

        color: #212121;
        border-bottom:1px solid #E0E0E0;


        @media screen and (min-width:768px){
            margin-right:31px;
        }

        /* @media screen and (min-width:1280px){
            margin-right:15px;
        } */

        :last-child{
            margin-right:0;
        }
    }

    .innerItemDairyProduct:first-child{
        justify-content: flex-start;
    
        @media screen and (min-width:768px){
            min-width: calc(100% - 104px - 31px - 31px - 31px - 104px);
        }
        
        @media screen and (min-width:1280px){
            min-width:200px;
        }
    }
    .innerItemDairyProduct:nth-child(2){
        min-width:50px;
        text-align:right;
        @media screen and (min-width:768px){
            min-width:109px;
        }
    }
    .innerItemDairyProduct:last-child{
        /* text-align:right; */
        border: none;
    } 

    .buttonItemDairyProduct{
        /* background-image: url(../../../img/icons/closeCross.svg);
        background-repeat: no-repeat;
        background-size: contain; */

        width: 20px;
        height:20px;
        background-color:transparent;
        border-color:transparent;

        &:hover,&:focus{
        border: 2px solid orange; 
        border-radius: 20px;
        color: orange;
        }

        color: grey;
        transform: translateY(1px);

    }
`