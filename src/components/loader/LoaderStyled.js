import styled from 'styled-components';

const Wrapper = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    /* top: 0;
    left: 0; */
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export default Wrapper;
