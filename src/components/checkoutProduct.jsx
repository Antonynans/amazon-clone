import styled from "styled-components/macro";


export const Div = styled.div`
  &.checkout {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &.info {
    padding-left: 20px
  }
  &.rating {
    display: flex;
  }
`;

export const ImgWrapper = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
`;

export const Paragraph = styled.p`
  &.title {
    font-size: 17px;
    font-weight: 800;
  }
`;

export const Button = styled.button`
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
`;