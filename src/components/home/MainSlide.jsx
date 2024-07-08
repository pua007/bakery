import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";

const MainSlideBlock = styled.div`
    position: relative;
    .slide {
        position: relative;
        height: 40vw;
        background-position: center;
        background-size: cover;
        &.slide1 {
            background-image: url(./assets/image/1.jpg);
            color: black;
        }
        &.slide2 {
            background-image: url(./assets/image/2.jpg);
        }
        &.slide3 {
            background-image: url(./assets/image/3.jpg);
        }
        .text {
            position: absolute;
            top: 50%;
            left: 0%;
            width: 100%;
            transform: translateY(-50%);
            color: #023586;
            h2 {
                text-align: center;
                font-size: 50px;

                @media screen and (max-width: 1024px) {
                    font-size: 30px;
                }
            }
            p {
                text-align: center;
                font-size: 20px;
                mrgin-top: 20px;
                @media screen and (max-width: 1024px) {
                    display: none;
                }
            }
        }
    }
    .slick-dots {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        li {
            display: inline-block;
            margin: 0 10px;

            button {
                width: 20px;
                height: 20px;
                background-color: red;
                border-radius: 50%;
                text-indent: -99999px;
                overflow: hiddene;
                @media screen and (max-width: 1024px) {
                    width: 10px;
                    height: 10px;
                }
            }
            &.slick-active {
                button {
                    background-color: white;
                }
            }
        }
    }

    .slick-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 50px;
        color: #f00;
        &.slick-prev {
            left: 30px;
            z-index: 100;
        }
        &.slick-next {
            right: 30px;
        }
    }
`;

const MainSlide = () => {
    const options = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <IoIosArrowDropleftCircle />,
        nextArrow: <IoIosArrowDroprightCircle />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <MainSlideBlock>
            <Slider {...options}>
                <div className="slide slide1">
                    <div className="text">
                        <h2>실키 롱케익</h2>
                        <p>
                            1988년 세상에 태어나 세계에서 가장 많이 팔린
                            실키롤케익
                        </p>
                    </div>
                </div>
                <div className="slide slide2">
                    <div className="text">
                        <h2>우승 축하 이벤트</h2>
                        <p>파리생제르맹 프랑스 챔피언십</p>
                    </div>
                </div>
                <div className="slide slide3">
                    <div className="text">
                        <h2>파리 올림픽</h2>
                        <p>팀코리아 응원가자!</p>
                    </div>
                </div>
            </Slider>
        </MainSlideBlock>
    );
};

export default MainSlide;
