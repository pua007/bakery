import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Footerblock = styled.div`
    background: #454a56;
    padding: 50px 0;
    color: #fff;
    .row{
      .company_nav{
        border-bottom: 1px solid #fff;
        padding-bottom:30px;
        margin-bottom:30px;
        a{
          margin-right: 20px;
          &:hover, &:focus{color: yellow;}
        }
      }
      .company_info{
        line-height:1.5rem;
      }
    }
      
    }
`;

const Footer = () => {
    return (
        <Footerblock>
            <div className="row">
                <div className="company_nav">
                    <a href="#javascript:;">회사소개</a>
                    <a href="#javascript:;">이용약관</a>
                    <a href="3javascript:;">개인정보처리방침</a>
                    <a href="http://www.naver.com" target="_blank">
                        사업자정보확인
                    </a>
                    <a href="#javascript:;">공지사항</a>
                </div>
                <div className="company_info"></div>
                <p>
                    (주)파리바게뜨 <span>대표: 이훈희, 이진성</span> | 04539
                    서울특별시 중구 을지로5길 19, 26층(수하동) | 사업자등록번호:
                    120-81-74197
                </p>
                <p>
                    대표자: 트렁히엔트란, Khong May Wan Sharon | 통신판매업
                    신고번호: 2021-서울중구-01116 | 사업자정보확{" "}
                    <a href="mailto:alskdjfh@gmaile.com">
                        이메일: alskdjfh@gmaile.com
                    </a>
                </p>
                <p>
                    고객 센터 : 02-3280-0104 (contactdiorkr@christiandior.com) |
                    호스팅 서비스: Smile Hosting{" "}
                    <a href="tel:070-5158-9176">전화번호:070-5158-9176</a>
                    <span>이메일: alskdjfh@gmaile.com</span>
                </p>
                <p>
                    COPYRIGHT © CHRISTIAN DIOR COUTURE KOREA ALL RIGHTS
                    RESERVED.
                </p>
                <p>이니시스 구매안전 서비스 가입함</p>
            </div>
        </Footerblock>
    );
};

export default Footer;
