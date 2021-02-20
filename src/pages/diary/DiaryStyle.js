import styled from "styled-components";

export const DiaryWrapper = styled.div`
.buttomDiaryProductList{
    display:block;
    margin:0 auto;
    margin-top:70px;
    width: 50px;
    height: 50px;
    border: 2px solid #FC842D;
    border-radius: 50px;
    background-color: #FC842D;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    color:#ffffff;
    cursor:pointer;

    &:hover,&:focus{
    background-color: #ffffff;
    color:#FC842D;
    background-image: url(../../img/icons/closeCross.svg);
    background-repeat: no-repeat;
    background-size: contain;
    }
}`