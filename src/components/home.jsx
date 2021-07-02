import styled from "styled-components/macro";


export const Div = styled.div`
  &.home {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
  }
  &.row {
    display: flex; 
    z-index: 1; 
    margin-left: 5px;  
    margin-right: 5px;
  }
`;

export const ImgWrapper = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;