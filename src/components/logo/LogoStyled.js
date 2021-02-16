import styled from "styled-components";

export const LogoContainerMobile = styled.img`
        @media (max-width: 767px) {
            display: block;
            
    }

    display: none;
`
export const LogoContainerTablet = styled.img`
        @media (min-width: 768px) and (max-width: 1279px) {
        display: block;
    }

    display: none;
`
export const LogoContainerDesktop = styled.img`
        @media (min-width: 1280px) {
        display: block;
    }

    display: none;
`
