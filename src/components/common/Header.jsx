import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, Link, useNavigate } from "react-router-dom";
//NavLink는 클릭을 받으면 .active클래스가 추가된다.
import { useDispatch } from "react-redux";
import { onChangeCategory } from "../../store/product";
import { useSelector } from "react-redux";
import { userLogout } from "../../store/member";

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
                &:hover,
                &.active {
                    color: #f00;
                }
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
        &:hover,
        &.active {
            color: #f00;
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
    const user = useSelector((state) => state.members.user);

    const dispatch = useDispatch();

    const [isUser, setIsUser] = useState(user);

    const navigate = useNavigate();

    useEffect(() => {
        setIsUser(user);
        console.log(isUser);
    }, [user]);
    console.log(isUser);
    return (
        <HeaderBlock>
            <div className="row">
                <Nav>
                    <ul className="depth1">
                        <li>
                            <NavLink to="employee">파바의인재</NavLink>
                        </li>
                        <li>
                            <NavLink to="movie">파바 매거진</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="product"
                                onClick={() =>
                                    dispatch(onChangeCategory("all"))
                                }
                            >
                                상품안내
                            </NavLink>
                            <ul className="depth2">
                                <li>
                                    <Link
                                        to="product"
                                        onClick={() =>
                                            dispatch(onChangeCategory("bread"))
                                        }
                                    >
                                        {" "}
                                        브래드
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="product"
                                        onClick={() =>
                                            dispatch(onChangeCategory("cake"))
                                        }
                                    >
                                        케이크
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="product"
                                        onClick={() =>
                                            dispatch(
                                                onChangeCategory("sandwich")
                                            )
                                        }
                                    >
                                        샌드위치
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="store">매장정보</NavLink>
                        </li>
                    </ul>
                </Nav>
                <h1>
                    <li>
                        <NavLink to="/">PARIS BAGUETTE</NavLink>
                    </li>
                </h1>
                <OtherNav>
                    <NavLink to="/cart">장바구니</NavLink>

                    {!isUser ? (
                        <>
                            <NavLink to="/login">로그인</NavLink>
                            <NavLink to="/join">회원가입</NavLink>
                        </>
                    ) : (
                        <>
                            <a
                                href="#"
                                onClick={() => {
                                    dispatch(userLogout());
                                    navigate("/");
                                }}
                            >
                                로그아웃
                            </a>
                            <NavLink to="/join">
                                정보수정({isUser.userName})
                            </NavLink>
                        </>
                    )}
                </OtherNav>
            </div>
        </HeaderBlock>
    );
};

export default Header;
