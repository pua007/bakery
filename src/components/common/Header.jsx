import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #023586;
  z-index: 99;
  height: 90px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    div {
      display: flex;
      align-items: center;
    }
    .left {
      align-items: left;
    }

    li {
      margin: 10px;
      color: white;
    }
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <nav>
        <ul>
          <div className="left">
            <li>
              <Link to="/">메인</Link>
            </li>
            <li>
              <Link to="product">상품목록</Link>
            </li>
            <li>
              <Link to="detail">상품상세</Link>
            </li>
            <li>
              <Link to="movie">영화목록</Link>
            </li>
          </div>
          <div className="right">
            <li>
              <Link to="employee">점원관리</Link>
            </li>
            <li>
              <Link to="store">매장관리</Link>
            </li>
            <li>
              <Link to="/cart">장바구니</Link>
            </li>
          </div>
        </ul>
      </nav>
    </HeaderBlock>
  );
};

export default Header;
