import React from "react";
import AboutPresentation from "./AboutPresentation";

const AboutContainer: React.FC = () => {
  // 실제 애플리케이션에서는 이 데이터를 API나 상태 관리 도구에서 가져올 수 있습니다.
  const aboutData = {
    churchInfo: {
      title: "교회 소개",
      description: "감사교회는 1990년에 설립된 교회입니다.",
    },
    vision: {
      title: "교회 비전",
      description:
        "우리 교회는 예수 그리스도의 사랑을 전파하고, 성도들의 영적 성장을 돕는 것을 목표로 합니다.",
    },
    history: {
      title: "교회 역사",
      events: [
        {
          year: "1990년",
          description: "교회 설립",
        },
        {
          year: "1995년",
          description: "현재의 교회당 건축",
        },
        {
          year: "2000년",
          description: "교육관 증축",
        },
        {
          year: "2010년",
          description: "선교센터 개원",
        },
      ],
    },
    pastor: {
      name: "김목사",
      education: "신학대학원 졸업",
      experience: "20년 목회 경력",
    },
  };

  // 필요한 경우 여기에서 데이터 fetching, 상태 관리, 이벤트 핸들러 등을 구현합니다.

  return <AboutPresentation {...aboutData} />;
};

export default AboutContainer;
