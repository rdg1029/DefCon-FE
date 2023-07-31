import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import * as API from "../../src/Common/API";
import ProjectList from "./ProjectList";
import ProjectSection from "./ProjectSection";

const Projects = () => {
  const [projectList, setProjectList] = useState<API.ProjectList>({count: 0, data: []});
  const [androidProjectList, setAndroidProjectList] = useState<Array<API.ProjectListItem>>([]);
  const [webProjectList, setWebProjectList] = useState<Array<API.ProjectListItem>>([]);
  const [selfRepairList, setSelfRepairList] = useState<Array<API.ProjectListItem>>([]);
  const [etcProjectList, setEtcProjectList] = useState<Array<API.ProjectListItem>>([]);

  function updateProjectList(data:API.ProjectListItem, list: Array<API.ProjectListItem>, setList: Dispatch<SetStateAction<API.ProjectListItem[]>>) {
    if (list.length === 0) {
      setList([data]);
      console.log(data.id);
    }
    else {
      list.map(p => {
        if (p.id === data.id) return;
        setList([...list, data]);
        console.log(data.id);
      });
    }
  }

  useEffect(() => {
    API.getProjectList().then((apiResult: any) => {
      if (!apiResult || apiResult.count === 0) return;
      setProjectList(apiResult);
    });
  }, []);

  useEffect(() => {
    projectList.data.map((projectData: API.ProjectListItem) => {
      switch(projectData.data.category) {
        case 'android':
          updateProjectList(projectData, androidProjectList, setAndroidProjectList);
          return;
        case 'web':
          updateProjectList(projectData, webProjectList, setWebProjectList);
          return;
        case 'repair':
          updateProjectList(projectData, selfRepairList, setSelfRepairList);
          return;
        default:
          updateProjectList(projectData, etcProjectList, setEtcProjectList);
          return;
      }
    })
  }, [projectList]);

  return (
    <ProjectWrapper>
      <ProjectSection 
        name="Android Applications"
        description="DEF:CON이 만든 안드로이드 애플리케이션 입니다.">
          <ProjectList list={androidProjectList} />
      </ProjectSection>
      <ProjectSection 
        name="Web Page & Web Application"
        description="DEF:CON이 만든 웹 페이지 & 웹 애플리케이션 입니다.">
          <ProjectList list={webProjectList} />
      </ProjectSection>
      <ProjectSection 
        name="LR's SELF-REPAIR"
        description="용민아 이것도 고쳐줘">
          <ProjectList list={selfRepairList} />
      </ProjectSection>
      <ProjectSection 
        name="Etc"
        description="그 외에 진행한 프로젝트 입니다">
          <ProjectList list={etcProjectList} />
      </ProjectSection>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  font-family: "Noto Sans KR";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conetent: center;
`;

export default Projects;
