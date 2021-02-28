import styled from 'styled-components';

export const UL = styled.ul`
  list-style: none;
  max-height: 256px;
  padding-right: 12px;

  ::-webkit-scrollbar {
    visibility: hidden;
  }

  ::-webkit-scrollbar-thumb {
    visibility: hidden;
  }

  ::-webkit-scrollbar-track {
    visibility: hidden;
  }

  @media screen and (min-width: 768px) {
    padding-right: 31px;
    height: 170px;
  }

  @media screen and (min-width: 1280px) {
    width: 600px;
    padding-right: 42px;
    max-height: 300px;
  }

  ${props =>
    props.length >= 4 &&
    ` 
    overflow-y: scroll;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        visibility: visible;
        width: 10px;
        margin-left: 0;
        background-color: #F5F5F5;
        border-radius: 10px;

    }

    ::-webkit-scrollbar-thumb { 
        visibility: visible;
        height: 10px; 
        width: 10px;
        background-color: #666;
        border-radius: 10px;
    
    }

    ::-webkit-scrollbar-track {
        visibility: visible;
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        border-radius: 10px;
    }   
      
    `}
`;

export const ListWrapper = styled.div`
  position: relative;
  margin-top: 31px;
`;

export const MaskWrapper = styled.div`
  position: absolute;
  width: 238px;
  height: 40px;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    #ffffff 42.19%
  );

  pointer-events: none;

  @media screen and (min-width: 768px) {
    width: 553px;
  }

  @media screen and (min-width: 1280px) {
    width: 507px;
  }

  ${props =>
    props.screenWidth >= 768 &&
    props.height >= 170 &&
    ` 
        height: 20px;
    `}
`;
