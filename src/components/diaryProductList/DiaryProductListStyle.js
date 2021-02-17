import styled from "styled-components";

export const UL = styled.div`
padding-left:15px;
list-style:none;
@media screen and (min-width:768px){
    padding-left:92px;
}
@media screen and (min-width:1200px){
    padding-left:115px;
}
#wrapper
{
	text-align: center;
	width: 500px;
	margin: auto;
}
#style-4::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

#style-4::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}
#style-4::-webkit-scrollbar-thumb
{
	background-color: #000000;
	border: 2px solid tomato;
	/* border: 2px solid #555555; */
}
`