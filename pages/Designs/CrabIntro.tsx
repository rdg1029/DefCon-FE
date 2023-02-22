import styled from "styled-components";
import Crab from "../../src/Common/Crab";
import BackgroundCard from "../../src/Common/BackgroundCard";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const CrabIntro = () => {
  const desktopChk = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (desktopChk) setIsDesktop(true);
  }, [desktopChk]);

  return (
    <CrabIntroWrapper>
      <CrabIntroContents>
        {isDesktop ? (
          <>
            <CrabIntroDesc>
              <p>
                DEF:CON의 마스코트인 DEF:CON CRAB은 메인 컬러와 마찬가지로
                <br />
                Windows 10의 블루스크린에서 착안하였습니다.
                <br />
                DEF:CON의 철자 C의 앞에 콜론 (:)을 삽입하여 블루스크린의
                이모티콘인
                <br />
                &quot;:(&quot;을 연상할 수 있게 만들어냈죠.
                <br />
                <br />
                코딩을 하다보면 웃음을 지을 때보단 울상일 때가 더 많은 우리의{" "}
                <br />
                표정과도 비슷한 DEF:CON CRAB은 DEF:CON의 초창기 로고부터 <br />
                유지되어온 DEF:CON의 헤리티지입니다. <br />
              </p>
            </CrabIntroDesc>
            <CrabIntroTitle>
              <h1>
                우리의 헤리티지
                <br/>
                DEF:CON CRAB
              </h1>
            </CrabIntroTitle>
          </>
        ) : (
          <>
            <CrabIntroTitle>
              <h1>
                우리의 헤리티지
                <br/>
                DEF:CON CRAB
              </h1>
            </CrabIntroTitle>
            <CrabIntroDesc>
              <p>
                DEF:CON의 마스코트인 DEF:CON CRAB은 메인 컬러와 마찬가지로
                Windows 10의 블루스크린에서 착안하였습니다. DEF:CON의 철자 C의
                앞에 콜론 (:)을 삽입하여 블루스크린의 이모티콘인
                &quot;:(&quot;을 연상할 수 있게 만들어냈죠. 코딩을 하다보면
                웃음을 지을 때보단 울상일 때가 더 많은 우리의 표정과도 비슷한
                DEF:CON CRAB은 DEF:CON의 초창기 로고부터 유지되어온 DEF:CON의
                헤리티지입니다.
              </p>
            </CrabIntroDesc>
          </>
        )}

        <BackgroundCard
          color="#C7E7FF"
          height="22rem"
          translateX="1100px"
          translateY="-108px"
          type="filled"
        />
      </CrabIntroContents>

      <CrabIntroLogoWrapper>
        <LogoHistoryWrapper>
          <Logo src="/Images/firstLogo.svg" />
          <Logo src="/Images/preLogo.svg" />
          <Logo src="/Images/mainLogo.svg" />
        </LogoHistoryWrapper>
        {isDesktop ? (
          <Crab width={15} height={15} marginTop={8} anim={true} />
        ) : (
          <Crab width={10} height={10} marginTop={2} anim={true} />
        )}
      </CrabIntroLogoWrapper>
    </CrabIntroWrapper>
  );
};

const CrabIntroWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
  @media screen and (min-width: 1280px) {
    margin-bottom: 10vh;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20vh;
  }
`;

const CrabIntroContents = styled.div`
  display: flex;
  width: 70vw;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CrabIntroTitle = styled.div`
  h1 {
    @media screen and (min-width: 1280px) {
      flex-basis: 40%;
      margin-left: 0;
      font-size: 45pt;
      letter-spacing: -5px;
      text-align: right;
    }
    @media screen and (max-width: 768px) {
      font-size: 40pt;
      letter-spacing: -2px;
      text-align: center;
    }
  }
`;

const CrabIntroDesc = styled.div`
  margin-top: 5vh;
  font-weight: 100;
  font-size: 16pt;
  p {
    @media screen and (min-width: 1280px) {
      flex-basis: 60%;
      text-align: left;
    }
    @media screen and (max-width: 768px) {
      width: 65vw;
      text-align: center;
    }
  }
`;

const CrabIntroLogoWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-top: 8vh;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 5vh;
    justify-content: center;
    align-items: center;
  }
`;

const LogoHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1280px) {
    margin-top: 5vh;
    margin-right: 20vw;
  }
  @media screen and (max-width: 768px) {
    margin-top: 5vh;
    margin-right: 0;
  }
`;

const Logo = styled.img`
  filter: drop-shadow(1px 1px 3px grey);
  @media screen and (min-width: 1280px) {
    width: 20vw;
    margin-bottom: 8vh;
  }
  @media screen and (max-width: 768px) {
    width: 50vw;
    margin-bottom: 8vh;
  }
`;

export default CrabIntro;
