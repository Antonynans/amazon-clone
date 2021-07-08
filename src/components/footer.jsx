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
    height: 27rem;
    width: 100%;
  }
  &.bottomDiv {
    display: flex;
    padding: 2% 10%;
    justify-content: space-around;

  }
  &.bottomRow {
    display: flex;
    flex-flow: column;
    width: 5rem;
    /* margin: 2% 5%; */

  }
`;

export const Span = styled.span`
  font-size: 10px;
  color: #999;
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
  &.bottomlink {
    font-size: 12px;
    display: flex;
    flex-flow: column;
    margin-bottom: 30%;
  }
  &.termslink {
    font-size: 12px;
    /* margin: 0 10%; */
    /* width: 10%; */
    /* text-align: center; */
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
  &.bottom {
    color: #fff;
    font-size: 12px;
    /* width: 25%; */
  }
`;
