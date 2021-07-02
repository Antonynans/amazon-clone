import styled from "styled-components/macro";


export const Div = styled.div`
  &.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
    background-color: white;
    z-index: 1;
  }
  &.info {
    height: 100px;
    margin-bottom: 15px;
  }
  &.rating {
    display: flex;
  }
`;

export const Paragraph = styled.p`
    margin-top: 5px;
`;

export const ImgWrapper = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
`;