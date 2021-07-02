import styled from "styled-components/macro";


export const Div = styled.div`
  &.header { 
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  &.search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px
  }
  &.nav {
    display: flex;
    justify-content: space-evenly;
  }
  &.option {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
  }
  &.optionBasket {
    display: flex;
    align-items: center;
    color: white;
  }
`;

export const Span = styled.span`
  &.optionLineOne {
    font-size: 10px;
  }
  &.optionLineTwo {
    font-size: 13px;
    font-weight: 800;
  }
  &.basketCount {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const ImgWrapper = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 18px 20px 0 20px;
`;

export const Icon = styled.div`
  padding: 5px;
  height: 22px !important;
  background-color: #cd9042;
`;

export const Input = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
`;
