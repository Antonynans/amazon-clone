import { Link } from "react-router-dom";
import styled from "styled-components/macro";



export const Div = styled.div`
  &.footer {
    background: #232F3E;
    display: flex;
    flex-flow: column;
    color: #fff;
    height: 25rem;
    width: 100%;
    justify-content: space-around;
  }
  &.col {
    display: flex;
    flex-flow: column;
    /* margin-top: 2%; */
    line-height: 120%;
  }
  &.subrow {
    display: flex;
    justify-content: space-around;
    margin: auto;
    width: 50%;
    align-items: center;
  }
  &.footerrow {
    border: 1px solid white;
    width: auto;
    height: 2rem;
    border-radius: 6%;
    margin: 0 2%;
  }
  &.bottomFooter {
    background-color: #131A22;
    height: 25rem;
    width: 100%;
  }
  &.bottomDiv {
    display: flex;
  }
  &.bottomRow {
    display: flex;
    flex-flow: column;

  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #DDD;
  font-size: 14px;
  margin: 0 0 10px;
  &.head {
    font-weight: 700;
    color: #fff;
  }
`;

export const Footerhead = styled.h4`
  font-weight: 700;
  color: #fff;
  margin: 0 0 15px;

`;

export const Paragraph = styled.p`
  &.topFooterText {
    font-size: 14px;
    color: #CCC;
    padding: 0 .6em;
    margin: .5rem;
    /* display: flex;
    justify-content: space-around; */
  }
`;
