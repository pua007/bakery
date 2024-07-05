import React from "react";
import styled from "styled-components";
import Title from "@/components/common/Title";
import JoinSection from "../components/member/JoinSection";

const JoinView = () => {
    return (
        <div className="row">
            <Title title="회원가입" />
            <JoinSection />
        </div>
    );
};

export default JoinView;
