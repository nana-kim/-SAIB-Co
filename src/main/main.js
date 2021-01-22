import React from "react";
import styled from "styled-components";

export default function main() {
  return (
    <Main>
      <NavContainer>
        <div className="navInner">
          <ul>
            <li>ABOUT</li>
            <li>SHOP</li>
            <li>CAMPAIGN</li>
            <li>SAIB-SAID</li>
          </ul>

          <img
            className="logoImg"
            src="https://www.saibnco.com/web/new/saib-logo.svg"
            alt="logo"
          />

          <ul>
            <li>FAQ</li>
            <li>LOGIN</li>
            <li>CART</li>
            <li>MAPAGE</li>
          </ul>

          <div className="rightIcon">
            <img
              className="navRightIcon"
              src="https://www.saibnco.com/web/new/global5.png"
              alt="globalIcon"
            />
            <img
              className="navRightIcon"
              src="https://www.saibnco.com/web/new/insta5.png"
              alt="instargramIcon"
            />
            <img
              className="navRightIcon"
              src="https://www.saibnco.com/web/new/fb5.png"
              alt="facebookIcon"
            />
          </div>
        </div>
      </NavContainer>
      <Video>
        <div className="videoContainer">
          <img
            src="https://i.vimeocdn.com/video/740122253.webp?mw=2400&mh=1349&q=70"
            alt="mainImg"
          ></img>
        </div>
      </Video>
      <SecondSection>
        <div className="background">
          <div className="secondSectionContainer">
            <div className="secondSectionMainText">
              <span>OUR PRODUCTS</span>
            </div>
            <div className="productInfoBox">
              <div className="productInfo">
                <div className="imageBox">
                  <img
                    src="https://www.saibnco.com/web/new/main_condom3p.jpg"
                    alt="productInfo"
                  />
                  <div className="productInfoText">
                    <div className="text1">파우치에 휴대하기 좋은</div>
                    <div className="text2">세이브 프리미엄 콘돔 (3pcs)</div>
                    <div className="text3">7,900원</div>
                  </div>
                </div>
                <div className="imageBox2">
                  <img
                    src="https://www.saibnco.com/web/new/main_fw_201105.jpg"
                    alt="productInfo"
                  />
                  <div className="productInfoText">
                    <div className="text1">천연유래성분으로 순한</div>
                    <div className="text2">세이브 네추럴 포밍여성 청결제</div>
                    <div className="text3">
                      2,9500원
                      <div className="discount"> → 최대 25% 할인 중</div>
                    </div>
                  </div>
                </div>
                <div className="imageBox">
                  <img
                    src="https://www.saibnco.com/web/new/main_condom6p.jpg"
                    alt="productInfo"
                  />
                  <div className="productInfoText">
                    <div className="text1">파우치에 휴대하기 좋은</div>
                    <div className="text2">세이브 프리미엄 콘돔 (3pcs)</div>
                    <div className="text3">7,900원</div>
                  </div>
                </div>
              </div>
              <div className="shopButtonContainer">
                <div>
                  <span>SHOP 바로가기</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecondSection>
      {/* <Thirdsection>
        <div className="thirdSectionContainer">
          <div className="thirdSectionMainText">
            <span>OUR PROMISE</span>
          </div>
          <div className="slideBox">
            <div className="imges1">
              <img src=""></img>
            </div>
            <div className="infoBox">
              <h3>01 -</h3>
              <p>embracing</p>
              <p>morden</p>
              <p>femininity</p>
              <p>세이브는 새롭고 주체적인 현대적 여성스러움을 제시합니다</p>
            </div>
          </div>
        </div>
      </Thirdsection> */}
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fce8ec;
  display: flex;
  justify-content: center;
  align-items: center;

  .navInner {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;

    ul {
      display: flex;
      text-align: center;

      li {
        color: #3b3f56;
        font-size: 14px;
        font-weight: bold;
        padding-right: 36px;
      }
    }

    .logoImg {
      width: 130px;
      height: 54px;
      padding-right: 36px;
    }

    ul {
      display: flex;
      text-align: center;
      li {
        padding-right: 36px;
        color: #3b3f56;
        font-size: 14px;
        font-weight: bold;
      }
    }
    .rightIcon {
      .navRightIcon {
        width: 30px;
        height: 20px;
        padding-right: 10px;
      }
    }
  }
`;
const Video = styled.div`
  .videoContainer {
    height: 650px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const SecondSection = styled.div`
  .background {
    background-image: url("https://www.saibnco.com/web/new/section2_bg.png");

    height: 700px;
    background-size: cover;
    margin-bottom: 100px;
    .secondSectionContainer {
      width: 1000px;
      margin: 0 auto;

      .secondSectionMainText {
        display: flex;
        align-items: center;
        margin-top: 92px;
        margin-bottom: 90px;
        padding-left: 2px;
        span {
          left: 2px;
          font-size: 40px;
          font-weight: lighter;
          line-height: 50px;
        }
      }
      .productInfoBox {
        .productInfo {
          width: 1000px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .imageBox {
            width: 300px;
            img {
              width: 300px;
              height: 300px;
              margin-bottom: 23px;
            }
            .productInfoText {
              width: 300px;
              line-height: 20px;
              .text1 {
                font-size: 14px;
                color: #797979;
              }
              .text2 {
                font-size: 16px;
                color: #282c49;
              }
              .text3 {
                font-size: 16px;
                color: #be4b78;
                padding: 3px;
              }
            }
          }
          .imageBox2 {
            width: 300px;
            img {
              width: 300px;
              height: 300px;
              margin-bottom: 23px;
            }
            .productInfoText {
              width: 300px;
              line-height: 20px;
              .text1 {
                font-size: 14px;
                color: #797979;
              }
              .text2 {
                font-size: 16px;
                color: #282c49;
              }
              .text3 {
                display: flex;
                font-size: 16px;
                color: #282c49;
                .discount {
                  padding: 0 3px;
                  font-size: 16px;
                  color: #be4b78;
                }
              }
            }
          }
        }
        .shopButtonContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 50px 0;
          div {
            width: 160px;
            height: 40px;
            background-color: #e7acbd;
            margin: 0 auto 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            span {
              color: #ffffff;
              font-size: 20px;
              font-weight: lighter;
            }
          }
        }
      }
    }
  }
`;
