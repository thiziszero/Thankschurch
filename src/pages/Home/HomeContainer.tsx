import React, { useState } from "react";
import HomePresentation from "./HomePresentation";

const VIDEO_SOURCES = [
  "https://www.youtube.com/embed/2ZeRWyvT42g?si=V08j5bq-1jIHuHxz",
  "https://www.youtube.com/embed/BwG1SyPWPV8?si=WX0AHK_zbdzUWjKa",
  "https://www.youtube.com/embed/7G0l9JFAbOs?si=YPcwajhe6wGtkrI5",
  "https://www.youtube.com/embed/-dtFoV-NoQo?si=EBOrIhVRw3WE7-jp",
  "https://www.youtube.com/embed/Y91YoV09b1g?si=QHselDXyKk8ek6Z0",
];

const HomeContainer: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? VIDEO_SOURCES.length - 1 : prev - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === VIDEO_SOURCES.length - 1 ? 0 : prev + 1
    );
  };

  // 실제 애플리케이션에서는 이 데이터를 API나 상태 관리 도구에서 가져올 수 있습니다.
  const homeData = {
    churchName: "감사교회",
    slogan: "주님의 사랑과 은혜가 넘치는 교회",
    schedules: [
      {
        title: "주일 예배",
        time: "매주 일요일 오전 11시",
      },
      {
        title: "수요 예배",
        time: "매주 수요일 저녁 7시",
      },
      {
        title: "새벽 기도회",
        time: "매일 새벽 5시",
      },
    ],
    weeklyBulletin: {
      title: "이번 주 주보",
      description: "이번 주 예배 순서와 공지사항을 확인하세요.",
    },
  };

  // 필요한 경우 여기에서 데이터 fetching, 상태 관리, 이벤트 핸들러 등을 구현합니다.

  return (
    <HomePresentation
      {...homeData}
      currentVideoSrc={VIDEO_SOURCES[currentVideoIndex]}
      onPrevVideo={handlePrevVideo}
      onNextVideo={handleNextVideo}
      totalVideos={VIDEO_SOURCES.length}
      currentVideoIndex={currentVideoIndex}
    />
  );
};

export default HomeContainer;
