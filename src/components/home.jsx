import styled from "styled-components/macro";
import { Link } from 'react-router-dom';


export const Div = styled.div`
  &.home {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
    background: #e7e7e7;
  }
  &.row {
    display: flex; 
    z-index: 1; 
    margin-left: 5px;  
    margin-right: 5px;
    margin-bottom: 2%;
  }
  &.card {
    background: #fff;
    width: 100%;
    height: 25rem;
    position: relative;
    display: flex;
    flex-flow: column;
    margin-bottom: 0;
    margin-top: 0;
    margin-left: 1%;
    margin-right: 0.5%;
    /* padding-top: 20px; */
    overflow: hidden;
  }
  &.box {
    height: 8rem;
    /* width: 0%; */
    background: #fff;
    padding-top: 20px;
    position: relative;


  }
`;

export const ImgWrapper = styled.img`
  &.home {
    width: 100%;
    z-index: -1;
    /* margin-bottom: -93px; */
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
  &.card {
    width: 88%;
    height: 18rem;
    position: relative;
    margin: auto;
  }
  &.ship {
    width: 95%;
    height: 100%;
    position: relative;
    margin: auto;
    margin-bottom: 0;
  }
  
`;

export const H2 = styled.h2`
  font-size: 21px;
  margin-left: 6%;
  margin-top: 6%;
`;

export const Cardlink = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: 'none';
  &.card {
    text-align: left;
    padding-bottom: 4%;
    margin-left: 8%;
  }
`;