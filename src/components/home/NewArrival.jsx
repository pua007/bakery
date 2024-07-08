import React from "react";
import styled from "styled-components";

const NewArrivalBlock = styled.div`
    margin: 100px auto;
    h2 {
        text-align: center;
        margin-bottom: 30px;
    }
`;
const UlBlock = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;
const LiBlock = styled.li`
    @media screen and (max-width: 1024px) {
        flex: 0 1 31.33%;
    }
    @media screen and (max-width: 767px) {
        flex: 0 1 48%;
    }
    overflow: hidden;
    position: relative;
    flex: 0 1 23%;
    border: 1px solid #ddd;
    margin: 20px 1%;
    .imgbox {
        overflow: hidden;
        img {
            transition: all 0.3s;
            &:hover {
                transform: scale(1.2);
            }
        }
    }
    .infobox {
        position: absolute;
        padding: 20px 20px;
        line-height: 1.5em;
        top: 100%;
        left: 0;
        width: 100%;
        transition: all 0.5s;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
    }
    &:hover {
        .infobox {
            top: 50%;
        }
    }
`;

const NewArrival = () => {
    const products = [
        {
            image: "./assets/image/new1.png",
            name: "제주몽생이샌드1",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new2.jpg",
            name: "제주몽생이샌드2",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new3.jpg",
            name: "제주몽생이샌드3",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new4.png",
            name: "제주몽생이샌드4",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new5.jpg",
            name: "제주몽생이샌드5",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new6.png",
            name: "제주몽생이샌드6",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new7.png",
            name: "제주몽생이샌드7",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new1.png",
            name: "제주몽생이샌드1",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new2.jpg",
            name: "제주몽생이샌드2",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new3.jpg",
            name: "제주몽생이샌드3",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new4.png",
            name: "제주몽생이샌드4",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new5.jpg",
            name: "제주몽생이샌드5",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new6.png",
            name: "제주몽생이샌드6",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new7.png",
            name: "제주몽생이샌드7",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new6.png",
            name: "제주몽생이샌드6",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
        {
            image: "./assets/image/new7.png",
            name: "제주몽생이샌드7",
            desc: "아주 맛있어요",
            conment: "1인당 5EA 구매 한정",
            price: 50000,
        },
    ];

    return (
        <NewArrivalBlock className="row">
            <h2>New Arrival</h2>
            <UlBlock>
                {products.map((item, index) => (
                    <LiBlock key={index}>
                        <div className="imgbox">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="infobox">
                            <p>{item.name}</p>
                            <p>{item.desc}</p>
                            <p>{item.conment}</p>
                            <p>
                                <strong>
                                    ￦{item.price.toLocaleString()}원
                                </strong>
                            </p>
                        </div>
                    </LiBlock>
                ))}
            </UlBlock>
        </NewArrivalBlock>
    );
};

export default NewArrival;
