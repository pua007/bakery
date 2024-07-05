import React from "react";
import Title from "@/components/common/Title";
import styled from "styled-components";
import MainSlide from "../components/home/MainSlide";
import MiniSlide from "../components/home/MiniSlide";
import NewArrival from "../components/home/NewArrival";

const HomeView = () => {
    return (
        <div>
            <MainSlide />
            <MiniSlide />
            <NewArrival />
        </div>
    );
};

export default HomeView;
