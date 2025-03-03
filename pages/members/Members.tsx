import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import * as API from "../../src/Common/API";
import MembersTitle from "./MembersTitle";
import MembersList from "./MembersList";
import MembersDetail from "./MembersDetail";

interface Props {
  marginBotton: boolean;
}

const tmpMemberData: MemberData = {
  id: "",
  data: {
    comment: "",
    company: "",
    company_img: "",
    profileImage: "",
    name: "",
    history: [],
    blog: { isEnabled: false, url: "" },
    boj: { isEnabled: false, url: "", username: "" },
    facebook: { isEnabled: false, url: "" },
    github: { isEnabled: false, url: "" },
    instagram: { isEnabled: false, url: "" },
    twitter: { isEnabled: false, url: "" },
  },
};

const tmpMemberList: Array<MemberData> = [tmpMemberData];

const Members = () => {
  const [isFirstClicked, setIsFirstClicked] = useState(false);
  const [memberData, setMemberData] = useState(tmpMemberData);
  const [memberList, setMemberList] = useState(tmpMemberList);
  const membersDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    API.getMemberList().then((apiResult: any) => {
      setMemberList(apiResult["data"]);
    });
  }, []);

  const onMemberClick = (id: string) => {
    setIsFirstClicked(true);
    API.getMemberData(id).then((apiResult: any) => {
      setMemberData({ id: id, data: apiResult });
      membersDetailRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <MembersStyle marginBotton={isFirstClicked}>
      <MembersContainer>
        <MembersTitle />
        <MembersViewContainer>
          <MembersList memberData={memberList} onClick={onMemberClick} />
          <MembersDetail
            ref={membersDetailRef}
            isFirstClicked={isFirstClicked}
            memberData={memberData}
          />
        </MembersViewContainer>
      </MembersContainer>
    </MembersStyle>
  );
};

const MembersStyle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Noto Sans KR";

  margin-bottom: ${(props) => props.marginBotton && "50vh"};
`;

const MembersContainer = styled.div`
  height: 100%;
  margin-top: 150px;
  @media all and (min-width: 1280px) {
    width: 1030px;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 700px;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 500px;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 400px;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100%;
    margin: 0 10px 0 10px;
  }
`;

const MembersViewContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media all and (min-width: 1280px) {
    flex-direction: row;
  }
  flex-direction: column;
`;

export type MemberData = {
  id: string;
  data: {
    comment: string;
    company: string;
    company_img: string;
    profileImage: string;
    name: string;
    history: Array<{ content: string; date: string }>;
    blog: { isEnabled: boolean; url: string };
    boj: { isEnabled: boolean; url: string; username: string };
    facebook: { isEnabled: boolean; url: string };
    github: { isEnabled: boolean; url: string };
    instagram: { isEnabled: boolean; url: string };
    twitter: { isEnabled: boolean; url: string };
  };
};

export default Members;
