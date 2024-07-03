import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onChangeCategory } from "../../store/product";

const Nav = styled.nav`
    .depth1 {
        display: flex;
        li {
            position: relative;
            &:hover {
                .depth2 {
                    display: block;
                }
            }
            a {
                padding: 40px 25px 40px 0px;
            }
            .depth2 {
                position: absolute;
                top: 100%;
                left: 0;
                margin-left: -35px;
                color: #000;
                width: 150px;
                border: 1px solid #023586;
                display: none;
                a {
                    padding: 10px;
                }
            }
        }
    }
`;

const OtherNav = styled.div`
    a {
        padding-left: 25px;
    }
`;

const HeaderBlock = styled.div`
    background: #023586;
    color: white;
    list-style: none;
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Header = () => {
    const dispatch = useDispatch();

    return (
        <HeaderBlock>
            <div className="row">
                <Nav>
                    <ul className="depth1">
                        <li>
                            <Link to="employee">파바의인재</Link>
                        </li>
                        <li>
                            <Link to="movie">파바 매거진</Link>
                        </li>
                        <li>
                            <Link to="product">상품안내</Link>
                            <ul className="depth2">
                                <li>
                                    <Link>전체</Link>
                                </li>
                                <li>
                                    <Link>브래드</Link>
                                </li>
                                <li>
                                    <Link>케이크</Link>
                                </li>
                                <li>
                                    <Link>샌드위치</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="store">매장정보</Link>
                        </li>
                    </ul>
                </Nav>
                <h1>
                    <li>
                        <Link to="/">PARIS BAGUETTE</Link>
                    </li>
                </h1>
                <OtherNav>
                    <Link to="/cart">장바구니</Link>
                    <Link to="/login">로그인</Link>
                    <Link to="/join">회원가입</Link>
                </OtherNav>
            </div>
        </HeaderBlock>
    );
};

export default Header;
