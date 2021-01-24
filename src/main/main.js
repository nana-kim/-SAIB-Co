import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 5000,
  };

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
      <Thirdsection>
        <div className="thirdSectionContainer">
          <div className="thirdSectionMainText">
            <span>OUR PROMISE</span>
          </div>
          <div className="slideBox">
            <Slider {...settings} className="slider">
              <div>
                <div className="slideBBox1">
                  <div className="imges1">
                    <img
                      src="https://www.saibnco.com/web/new/web_image/image05.jpeg"
                      alt="pomiseImg"
                    />
                  </div>
                  <div className="infoContainer">
                    <div className="infoTextBox">
                      <div className="text1">01 -</div>
                      <div className="text2Box">
                        <div className="text2">embracing</div>
                        <div className="text2">morden</div>
                        <div className="text2">femininity</div>
                      </div>
                      <p>세이브는 새롭고 주체적인</p>
                      <p> 현대적 여성스러움을 제시합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slideBox2">
                  <div className="imges2">
                    <img
                      src="https://www.saibnco.com/web/new/web_image/image02.jpeg"
                      alt="pomiseImg"
                    />
                  </div>
                  <div className="infoContainer">
                    <div className="infoBox">
                      <div className="text1">02 -</div>
                      <div className="text2Box">
                        <div className="text2">making</div>
                        <div className="text2">women</div>
                        <div className="text2">proud</div>
                      </div>
                      <p>세이브 제품을 사용하는 것이 여성의</p>
                      <p> 자랑스러움이 되었으면 합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slideBox3">
                  <div className="imges3">
                    <img
                      src="https://www.saibnco.com/web/new/web_image/image03.jpeg"
                      alt="pomiseImg"
                    />
                  </div>
                  <div className="infoContainer">
                    <div className="infoBox">
                      <div className="text1">03 -</div>
                      <div className="text2Box">
                        <div className="text2">beging simple</div>
                        <div className="text2">with no frills</div>
                      </div>
                      <p>제품이나 메시지에서도</p>
                      <p> 불필요함을 제거한 심플함을 추구합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slideBox4">
                  <div className="imges4">
                    <img
                      src="https://www.saibnco.com/web/new/web_image/image04.jpeg"
                      alt="pomiseImg"
                    />
                  </div>
                  <div className="infoContainer">
                    <div className="infoBox">
                      <div className="text1">04 -</div>
                      <div className="text2Box">
                        <div className="text2">begin frank</div>
                        <div className="text2">& open</div>
                      </div>
                      <p>제조 공정이나 성분 등 필수 정보를</p>
                      <p> 투명하게 공개합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slideBox5">
                  <div className="imges5">
                    <img
                      src="https://www.saibnco.com/web/new/web_image/image05.jpeg"
                      alt="pomiseImg"
                    />
                  </div>
                  <div className="infoContainer">
                    <div className="infoBox">
                      <div className="text1">05 -</div>
                      <div className="text2Box">
                        <div className="text2">keeping it</div>
                        <div className="text2">healthy,natural &</div>
                        <div className="text2">female-friendly</div>
                      </div>
                      <p>건강한 자연 성분으로</p>
                      <p>여성친화적인 제품만을 만듭니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </Thirdsection>
      <FourthSection>
        <div className="fourthSectionContainer">
          <div className="reviewBox">
            <Slider {...settings2} className="slider2">
              <div className="review1">
                <div>
                  <div className="reviewTop">
                    <img
                      className="peopleIcon"
                      src="https://www.saibnco.com/web/new/emoji_1.svg"
                      alt="peopleIcon"
                    />
                    <img
                      className="starImg"
                      src="https://www.saibnco.com/web/new/start_review.svg"
                      alt="starImages"
                    />
                  </div>
                  <div className="reviewTextBox">
                    <p>
                      인생 콘돔이에요. 콘돔 특유의 기분 나쁜 <br></br>고무 향도
                      싫고, 그 향을 감추고자 인공 향료<br></br>를 사용해서
                      지나치게 달달한 향이 나는 것도<br></br> 찜찜했는데 이 제품
                      처음 만나고는 불쾌한<br></br> 향도 없고 손 끝에 남는 기분
                      나쁜 오일리함도 <br></br>없었어요. 관계 후 씻어낼 때도
                      확실히
                      <br></br>다른 느낌이라 사용 후 찾아봤더니 역시 좋은
                      <br></br>
                      원료들로만 만든 착한 제품이더군요. SAIB<br></br>를 만난
                      이후도 다른 콘돔은 아예 안씁니다.
                    </p>
                  </div>
                  <div className="reviewInfo">
                    <p>
                      세이브 프리미엄 콘돔 대용량(24pcs)<br></br> sol**** |
                      2020.6.5
                    </p>
                  </div>
                </div>
              </div>
              <div className="review1">
                <div>
                  <div className="reviewTop">
                    <img
                      className="peopleIcon"
                      src="https://www.saibnco.com/web/new/emoji_2.svg"
                      alt="peopleIcon"
                    />
                    <img
                      className="starImg"
                      src="https://www.saibnco.com/web/new/start_review.svg"
                      alt="starImages"
                    />
                  </div>
                  <div className="reviewTextBox">
                    <p>
                      아내를 사랑한다면 구매하지 않을 이유가<br></br> 없는 좋은
                      제품입니다. 다른 콘돔은 쓰고도<br></br> 찝찝한데 깔끔한
                      느낌이 좋았어요. 아내도 <br></br>좋아했고 사랑받는다는 걸
                      느끼는 것 같다고<br></br>
                      합니다. 수딩케어 젤은 자극적이지 않은<br></br> 알로에를
                      바른 느낌이고 콘돔도 깔끔하고<br></br> 관계도 충분히
                      만족했습니다. 여성들 건강을<br></br> 생각한 더 다양한
                      제춤이 나왔으면 하네요.<br></br>
                      감사합니다.
                    </p>
                  </div>
                  <div className="reviewInfo">
                    <p>
                      세이브 콘돔+수딩 케어 젤 세트<br></br> 카카오회원 |
                      2020.6.11
                    </p>
                  </div>
                </div>
              </div>
              <div className="review1">
                <div>
                  <div className="reviewTop">
                    <img
                      className="peopleIcon"
                      src="https://www.saibnco.com/web/new/emoji_3.svg"
                      alt="peopleIcon"
                    />
                    <img
                      className="starImg"
                      src="https://www.saibnco.com/web/new/start_review.svg"
                      alt="starImages"
                    />
                  </div>
                  <div className="reviewTextBox">
                    <p>
                      속옷을 고르거나 생리대를 고를 때는 내 몸에<br></br>{" "}
                      닿는다는 이유 하나만으로 항상 신중하게 <br></br> 고민해
                      왔었는데 몸속 깊이 접촉하는 콘돔 <br></br> 사용에는 오히려
                      더 무신경했던 것 같아요!<br></br> 콘돔에 나쁜 화학 물질이
                      많다는 뉴스를 접하<br></br> 고 걱정을 하고 있던 차에
                      세이브앤코 광고를<br></br> 보고 구매하게 되었어요. 그동안
                      무심결에 <br></br> 나쁜 화학물질에 노출되었다고 생각하니
                      <br></br> 걱정이 앞서면서 앞으로는 더 꼼꼼히 살펴
                      <br></br> 보고 구매하려고 해요~
                    </p>
                  </div>
                  <div className="reviewInfo">
                    <p>
                      세이브 프리미엄 콘돔 대용량(24pcs)<br></br> seo**** |
                      2020.6.1
                    </p>
                  </div>
                </div>
              </div>
              <div className="review1">
                <div>
                  <div className="reviewTop">
                    <img
                      className="peopleIcon"
                      src="https://www.saibnco.com/web/new/emoji_4.svg"
                      alt="peopleIcon"
                    />
                    <img
                      className="starImg"
                      src="https://www.saibnco.com/web/new/start_review.svg"
                      alt="starImages"
                    />
                  </div>
                  <div className="reviewTextBox">
                    <p>
                      콘돔과 수딩젤 모두 매우 만족합니다.<br></br> 사실 기능을
                      떠나서라도 취지와 성분을 따져<br></br>만든 제품을 시중에
                      찾기가 어려워 사용감이<br></br>좀 별로더라도 사용하고자
                      주문해봤는데 <br></br>콘돔도 훌륭하고 특히 수딩 젤이 정말
                      맘에<br></br> 들어요. 최근 건조함 때문에 고민이 많아서
                      <br></br>젤이 꼭 필요했는데 끈적임이 전혀 남지<br></br>
                      않으면서도 얇게 발리는 데 아주 부드럽게<br></br>
                      미끌거려서 사용하기가 정말 좋아요.
                    </p>
                  </div>
                  <div className="reviewInfo">
                    <p>
                      세이브 콘돔+수딩 케어 젤 세트<br></br> daw**** | 2020.6.11
                    </p>
                  </div>
                </div>
              </div>
              <div className="review1">
                <div>
                  <div className="reviewTop">
                    <img
                      className="peopleIcon"
                      src="https://www.saibnco.com/web/new/emoji_5.svg"
                      alt="peopleIcon"
                    />
                    <img
                      className="starImg"
                      src="https://www.saibnco.com/web/new/start_review.svg"
                      alt="starImages"
                    />
                  </div>
                  <div className="reviewTextBox">
                    <p>
                      대용량이 나오기 전부터 애용했어요!<br></br>
                      남자친구와 대용량이 나오면 좋겠다는 얘기<br></br>를
                      자주(?) 나눴는데, 대용량으로 구매할 수<br></br> 있어서
                      경제 적으로나 환경 적으로나 여러<br></br>모로 좋아요!
                      사람들이 세잉브엔코에 대해<br></br> 더 많이 알았으면
                      좋겠어요 :)
                    </p>
                  </div>
                  <div className="reviewInfo">
                    <p>
                      세이브 프리미엄 콘돔 대용량(24pcs)<br></br> ddo**** |
                      2020.4.26
                    </p>
                  </div>
                </div>
              </div>
              <div className="review1">
                <div>
                  <div className="reviewTop">
                    <img
                      className="peopleIcon"
                      src="https://www.saibnco.com/web/new/emoji_6.svg"
                      alt="peopleIcon"
                    />
                    <img
                      className="starImg"
                      src="https://www.saibnco.com/web/new/start_review.svg"
                      alt="starImages"
                    />
                  </div>
                  <div className="reviewTextBox">
                    <p>
                      이 제품을 처음 알았을 때 "이제까지 나만 몰<br></br>
                      랐어."라는 푸념과 함께 바로 구입했답니다.<br></br>항상
                      약간의 질염을 달고 살았는데 이제까지 아무 생각 없이
                      사용하던 콘돔이 원인이었던<br></br>거 같아요. 사용 느낌은
                      별 다르지 않았지만 <br></br>더욱 안전하게 부부관계를 할 수
                      있게 되어<br></br>좋았어요~ 케이스도 예쁘고, 앞으로도
                      재구매 의향 있네요^^
                    </p>
                  </div>
                  <div className="reviewInfo">
                    <p>
                      세이브 프리미엄 콘돔 대용량(24pcs)<br></br> son**** |
                      2020.5.22
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </FourthSection>
      <FifthSection>
        <div>
          <div className="fifthSectionMainText">
            <span>CAMPAIGN →</span>
          </div>
          <div className="campaingInfoContainer">
            <img
              src="https://www.saibnco.com/web/new/saib_campaign.jpg"
              alt="campaingImage"
            />

            <div className="rightBox">
              <div className="mainText">
                <p>
                  female<br></br>empowerment
                </p>
              </div>
              <div className="infoText">
                <p>
                  세이브는 판매 수익의 10%를<br></br>성 평등과 여성 권리 증진을
                  위한<br></br>다양한 캠페인에 사용합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FifthSection>
      <SixthSection>
        <div className="sixthSectionContainer">
          <div className="sixthSectionbox">
            <div className="award">
              <p className="mainText">AWARDS →</p>
              <p className="infoText">세이브앤코 수상내역</p>
            </div>
            <div className="press">
              <p className="mainText">PRESS →</p>
              <p className="infoText">세이브앤코 언론보도</p>
            </div>
            <div className="stockist">
              <p className="mainText">STOCKIST →</p>
              <p className="infoText">오프라인 판매처</p>
            </div>
          </div>
        </div>
        <div className="awardListContainer">
          <div className="awardList">
            <img
              src="https://saibstorage.blob.core.windows.net/image/1599716825173.jpg"
              alt="awardListimage"
            />
          </div>
        </div>
      </SixthSection>
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
const Thirdsection = styled.div`
  .thirdSectionContainer {
    width: 1000px;
    margin: 0 auto;
    .thirdSectionMainText {
      padding-top: 92px;
      margin-bottom: 92px;
      span {
        font-size: 42px;
        font-weight: lighter;
      }
    }
  }
  .slideBox {
    padding-bottom: 100px;
    .slider {
      padding-bottom: 60px;
      .slideBBox1 {
        display: flex;
        .imges1 {
          width: 500px;
          height: 500px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .infoContainer {
          background-color: #fce8ec;
          width: 500px;
          height: 500px;
          .infoTextBox {
            padding-left: 25px;
            padding-top: 15px;
            .text1 {
              font-size: 60px;
              color: #d0d0d0;
            }
            .text2Box {
              margin-top: 120px;
              margin-bottom: 70px;
              .text2 {
                font-size: 52px;
                color: #e7acbd;
                font-weight: bold;
              }
            }
            p {
              font-size: 18px;
              color: #3b3f56;
              font-weight: lighter;
              line-height: 30px;
            }
          }
        }
      }
      .slideBox2 {
        display: flex;
        .imges2 {
          img {
            width: 500px;
            height: 500px;
          }
        }
        .infoContainer {
          background-color: #fce8ec;
          .infoBox {
            width: 500px;
            height: 500px;
            padding-left: 25px;
            padding-top: 15px;

            .text1 {
              font-size: 60px;
              color: #d0d0d0;
            }
            .text2Box {
              margin-top: 120px;
              margin-bottom: 70px;
              .text2 {
                font-size: 52px;
                color: #e7acbd;
                font-weight: bold;
              }
            }
            p {
              font-size: 18px;
              color: #3b3f56;
              font-weight: lighter;
              line-height: 30px;
            }
          }
        }
      }
      .slideBox3 {
        display: flex;
        .imges3 {
          img {
            width: 500px;
            height: 500px;
          }
        }
        .infoContainer {
          background-color: #fce8ec;
          .infoBox {
            width: 500px;
            height: 500px;
            padding-left: 25px;
            padding-top: 15px;

            .text1 {
              font-size: 60px;
              color: #d0d0d0;
            }
            .text2Box {
              margin-top: 120px;
              margin-bottom: 70px;
              .text2 {
                font-size: 52px;
                color: #e7acbd;
                font-weight: bold;
              }
            }
            p {
              font-size: 18px;
              color: #3b3f56;
              font-weight: lighter;
              line-height: 30px;
            }
          }
        }
      }
      .slideBox4 {
        display: flex;
        .imges4 {
          img {
            width: 500px;
            height: 500px;
          }
        }
        .infoContainer {
          background-color: #fce8ec;
          .infoBox {
            width: 500px;
            height: 500px;
            padding-left: 25px;
            padding-top: 15px;

            .text1 {
              font-size: 60px;
              color: #d0d0d0;
            }
            .text2Box {
              margin-top: 120px;
              margin-bottom: 70px;
              .text2 {
                font-size: 52px;
                color: #e7acbd;
                font-weight: bold;
              }
            }
            p {
              font-size: 18px;
              color: #3b3f56;
              font-weight: lighter;
              line-height: 30px;
            }
          }
        }
      }
      .slideBox5 {
        display: flex;
        .imges5 {
          img {
            width: 500px;
            height: 500px;
          }
        }
        .infoContainer {
          background-color: #fce8ec;
          .infoBox {
            width: 500px;
            height: 500px;
            padding-left: 25px;
            padding-top: 15px;

            .text1 {
              font-size: 60px;
              color: #d0d0d0;
            }
            .text2Box {
              margin-top: 120px;
              margin-bottom: 70px;
              .text2 {
                font-size: 52px;
                color: #e7acbd;
                font-weight: bold;
              }
            }
            p {
              font-size: 18px;
              color: #3b3f56;
              font-weight: lighter;
              line-height: 30px;
            }
          }
        }
      }
      .slick-dots {
        li {
          width: 10px;
          button::before {
            font-size: 15px;
            color: #f3bfc8;
          }
        }
      }
    }
  }
`;
const FourthSection = styled.div`
  .fourthSectionContainer {
    width: 1000px;
    margin: 0 auto;
    .reviewBox {
      height: 600px;

      padding: 80px 0;
      .slider2 {
        padding-bottom: 30px;
        .review1 {
          display: flex;

          div {
            width: 313px;
            height: 400px;
            background-color: #f8e4e8;
            .reviewTop {
              display: flex;
              align-items: center;
              padding: 0px 30px 0px;
              height: 74px;
              padding-top: 40px;
              .peopleIcon {
                width: 42px;
                height: 42px;
                padding-right: 10px;
              }
            }
            .reviewTextBox {
              padding: 15px 30px 40px;
              height: 212px;
              p {
                font-size: 14px;
                color: #767676;
                line-height: 1.5em;
              }
            }
            .reviewInfo {
              padding: 30px 30px 0 30px;
              height: 42px;
              p {
                font-size: 14px;
                color: #e0a6b8;
                text-align: right;
                line-height: 1.5em;
              }
            }
          }
        }
        .slick-dots {
          li {
            width: 10px;
            button::before {
              font-size: 15px;
              color: #f3bfc8;
            }
          }
        }
      }
    }
  }
`;
const FifthSection = styled.div`
  background-color: #fce8ec;
  display: flex;
  justify-content: center;
  div {
    width: 1000px;
    .fifthSectionMainText {
      padding-top: 92px;
      span {
        font-size: 40px;
        color: #5d6078;
        font-weight: lighter;
      }
    }
    .campaingInfoContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 61px;
      margin-bottom: 200px;
      img {
        width: 650px;
      }
      .rightBox {
        width: 320px;
        height: 500px;
        .mainText {
          width: 320px;
          height: 80px;
          p {
            font-size: 50px;
            line-height: 40px;
            color: #e7acbd;
            margin-top: 138px;
          }
        }
        .infoText {
          width: 320px;
          height: 78px;
          p {
            font-size: 18px;
            line-height: 26px;
            margin-top: 133px;
            font-weight: lighter;
          }
        }
      }
    }
  }
`;
const SixthSection = styled.div`
  .sixthSectionContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    .sixthSectionbox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1000px;
      height: 195px;
      margin: 30px 0;
      .award {
        width: 390px;
        height: 135px;
        padding: 30px 60px 30px 0;

        .mainText {
          width: 224px;
          height: 44px;
          font-size: 35px;
          font-weight: 100;
        }
        .infoText {
          width: 224px;
          font-size: 18px;
          color: #e7acbd;
          font-weight: lighter;
        }
      }
      .press {
        width: 390px;
        height: 135px;
        padding: 30px 100px;
        border-right: 1px solid #e7acbd;
        border-left: 1px solid #e7acbd;

        .mainText {
          width: 224px;
          height: 44px;
          font-size: 35px;
          font-weight: 100;
        }
        .infoText {
          width: 224px;
          font-size: 18px;
          color: #e7acbd;
          font-weight: lighter;
        }
      }
      .stockist {
        width: 390px;
        height: 135px;
        padding: 30px 0px 30px 85px;

        .mainText {
          width: 224px;
          height: 44px;
          font-size: 35px;
          font-weight: 100;
        }
        .infoText {
          width: 224px;
          font-size: 18px;
          color: #e7acbd;
          font-weight: lighter;
        }
      }
    }
  }
  .awardListContainer {
    .awardList {
      background-color: #fce8ec;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 1000px;
      }
    }
  }
`;
