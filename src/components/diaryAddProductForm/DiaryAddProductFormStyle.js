import styled from 'styled-components';

export const DiaryFormWrapper = styled.div`
position: relative;
margin-top:80px;
//padding-left:15px;
@media screen and (min-width:768px){
    margin-top:0px;
    margin-bottom:59.5px;
    //padding-left:92px;
}
@media screen and (min-width:1280px){
    margin-right:168px;
//padding-left:115px;
}
.formDairyAddProduct{
    display:flex;
    flex-direction:column;
   
}
.inputBlockDairyAddProduct{
 @media screen and (min-width:768px){
         flex-direction:row;
    }
}
.inputDairyAddProduct{
    margin-bottom:30px;
    padding-top:10px;
    padding-bottom:10px;
    width: 289px;
border-top:transparent;
border-left:transparent;
border-right:transparent;
border-bottom: 1px solid #E0E0E0;
    font-family: Verdana;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height:1.21;
letter-spacing: 0.04em;

color: #9B9FAA;

@media screen and (min-width:768px){
 width: 270px;

}
}
}

.secondInputLength{
    
   @media screen and (min-width:768px){
 width: 105px;
 margin-left:31px;
 text-indent: 25px;

} 
}

.selectDairyAddProduct{
    padding:10px;
    width: 289px;
    border: 1px solid #E0E0E0;
    border-radius: 30px;
     font-family: Verdana;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height:1.21;
letter-spacing: 0.04em;

color: #9B9FAA;
}
.buttonDairyAddProduct{
    margin:0 auto;
    //margin-top:60px;
    padding: 13px 46px;
    width: 176px;
      font-family: Verdana;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 1.21;
align-items: center;
text-align: center;
letter-spacing: 0.04em;

    background-color: #FC842D;
    border-color:transparent;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
border-radius: 30px;

color: #FFFFFF;
cursor: pointer;
   @media screen and (min-width:768px){
       position: absolute;
       //top: -70px;
       left: 450px;
       width: 50px;
       height: 50px;
       padding:0;
       border-radius:50px;
} 
&:hover,&:focus{
  background-color: #ffffff;
  border: 2px solid #FC842D;
  color: #FC842D; 
}

}
.validationError{
    font-family: Verdana;
font-style: normal;
font-weight: 700;
font-size: 20px;
    color: #FC842D; 
}

`;
