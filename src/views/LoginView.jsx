import React from "react";
import styled from "styled-components";
import Title from "@/components/common/Title";
import LoginSection from "@/components/member/LoginSection";

const LoginView = () => {
    return (
        <div className="row">
            <Title title="로그인" />
            <LoginSection />
        </div>
    );
};

export default LoginView;
