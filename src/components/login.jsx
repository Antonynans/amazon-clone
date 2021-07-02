import styled from "styled-components/macro";


export const Div = styled.div`
  &.login {
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &.container {
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
  }
`;

export const Paragraph = styled.p`
  &.header {
    font-weight: 500;
    margin-bottom: 20px;
  }
  &.subheader {
    margin-bottom: 5px;
  }
  &.text {
    margin-top: 15px;
    font-size: 12px;
  }
`;

export const ImgWrapper = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
`;

export const Input = styled.input`
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
`;

export const Form = styled.form`

`;

export const Button = styled.button`
  &.login {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
  }
  &.register {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
  }
`;
