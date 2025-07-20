import React, { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  VStack,
  IconButton,
  Container,
  Image,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useAppContext } from "../Context";
import { useMediaQuery } from "../utils/useMediaQuery";

interface SubMenuItem {
  title: string;
  path: string;
  subItems?: { title: string; path: string }[];
}

interface MenuItem {
  title: string;
  subItems: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "교회소개",
    subItems: [
      {
        title: "교회안내",
        path: "/info",
        subItems: [
          { title: "인사말", path: "/about/greeting" },
          { title: "연혁", path: "/intro/history" },
          { title: "예배시간", path: "/info/worship-time" },
          { title: "약도 및 주차", path: "/info/location" },
          { title: "주보", path: "/info/weekly" },
          { title: "공지사항", path: "/info/notice" },
        ],
      },
    ],
  },
  {
    title: "설교/찬양",
    subItems: [
      { title: "주일설교", path: "/media/sunday-sermon" },
      { title: "수요설교", path: "/media/wednesday-sermon" },
      { title: "찬양영상", path: "/media/praise" },
      { title: "특별영상", path: "/media/special" },
    ],
  },
  {
    title: "목양/사역",
    subItems: [
      { title: "목장사역", path: "/ministry/small-groups" },
      { title: "양육사역", path: "/ministry/discipleship" },
      { title: "선교사역", path: "/ministry/missions" },
      { title: "구제사역", path: "/ministry/charity" },
    ],
  },
  {
    title: "교육훈련",
    subItems: [
      {
        title: "셀 안내",
        path: "/education/cell",
        subItems: [
          { title: "자말묵셀", path: "/education/cell/cell1" },
          { title: "거듭남격려셀", path: "/education/cell/cell2" },
          { title: "기초소양셀", path: "/education/cell/cell3" },
        ],
      },
      {
        title: "교육부",
        path: "/education/department",
        subItems: [
          { title: "유치부", path: "/education/department/kindergarten" },
          { title: "주일학교", path: "/education/department/elementary" },
          { title: "학생부", path: "/education/department/youth" },
          { title: "청년부", path: "/education/department/young-adult" },
        ],
      },
    ],
  },
];

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // 메뉴 변경 시 애니메이션 처리
  const handleMenuChange = (menuTitle: string) => {
    if (activeMenu !== menuTitle) {
      setIsAnimating(true);
      setIsDropdownOpen(false);

      // 드롭다운이 접히는 애니메이션을 위한 짧은 딜레이
      setTimeout(() => {
        setActiveMenu(menuTitle);
        setIsDropdownOpen(true);

        // 애니메이션 완료 후 상태 초기화
        setTimeout(() => {
          setIsAnimating(false);
        }, 100); // 애니메이션 지속 시간 단축
      }, 150); // 드롭다운 접히는 시간 단축
    }
  };

  // 드롭다운 메뉴 닫기
  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
    setActiveMenu(null);
    setIsAnimating(false);
  };

  // 사이드바 열기/닫기
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // 헤더 높이 측정
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // 페이지 변경 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Box>
      {/* 헤더 */}
      <Box
        ref={headerRef}
        bg="white"
        px={4}
        py={4}
        position="fixed"
        top={0}
        left={0}
        right={0}
        boxShadow="sm"
        zIndex={1000}
      >
        <Container maxW="1200px">
          {isDesktop ? (
            <Flex justify="space-between" align="center">
              {/* 로고 */}
              <Image
                src="/assets/logo_thanks-removebg.png"
                alt="Academy Logo"
                h={{ base: 8, md: 10 }}
                w="98px"
                cursor="pointer"
                onClick={() => navigate("/")}
              />

              {/* 데스크톱 네비게이션 */}
              <Box position="absolute" left="50%" transform="translateX(-50%)">
                <Flex gap={12} whiteSpace="nowrap">
                  {menuItems.map((item) => (
                    <Text
                      key={item.title}
                      cursor="pointer"
                      fontWeight="bold"
                      fontSize="lg"
                      color={
                        activeMenu === item.title ? "blue.500" : "gray.700"
                      }
                      onMouseEnter={() => handleMenuChange(item.title)}
                      position="relative"
                      transition="color 0.2s"
                      _hover={{
                        color: "blue.500",
                        _after: {
                          transform: "scaleX(1)",
                        },
                      }}
                      _after={{
                        content: '""',
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "blue.500",
                        transform:
                          activeMenu === item.title ? "scaleX(1)" : "scaleX(0)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {item.title}
                    </Text>
                  ))}
                </Flex>
              </Box>

              {/* 로그인 버튼 */}
              <Button
                variant="ghost"
                h={{ base: 8, md: 10 }}
                w="98px"
                onClick={() => navigate("/login")}
                _hover={{ color: "blue.500" }}
              >
                로그인
              </Button>
            </Flex>
          ) : (
            // 모바일 헤더
            <Flex justify="space-between" align="center">
              <IconButton
                aria-label="Toggle Sidebar"
                variant="ghost"
                onClick={toggleSidebar}
                width="40px"
                height="40px"
              >
                {isSidebarOpen ? <FaTimes /> : <FaBars />}
              </IconButton>

              {/* 모바일에서 로고 중앙 정렬 */}
              <Box position="absolute" left="50%" transform="translateX(-50%)">
                <Image
                  src="/assets/logo_thanks-removebg.png"
                  alt="Academy Logo"
                  h={8}
                  cursor="pointer"
                  onClick={() => navigate("/")}
                />
              </Box>

              {/* 모바일 로그인 버튼 */}
              <IconButton
                aria-label="Login"
                variant="ghost"
                onClick={() => navigate("/login")}
                width="40px"
                height="40px"
              >
                <FaUser />
              </IconButton>
            </Flex>
          )}
        </Container>
      </Box>

      {/* 드롭다운 메뉴 */}
      <Box
        position="fixed"
        top={`${headerHeight}px`}
        left={0}
        right={0}
        bg="white"
        boxShadow="lg"
        zIndex={999}
        opacity={isDesktop && isDropdownOpen && activeMenu ? 1 : 0}
        transform={
          isDesktop && isDropdownOpen && activeMenu
            ? "translateY(0)"
            : "translateY(-20px)"
        }
        transition="all 0.3s ease-in-out"
        visibility={
          isDesktop && (isDropdownOpen || isAnimating) ? "visible" : "hidden"
        }
        onMouseLeave={handleCloseDropdown}
      >
        <Container maxW="1200px" py={6}>
          {activeMenu === "교회소개" ? (
            <Grid templateColumns="repeat(2, 1fr)" gap={8}>
              {menuItems
                .find((item) => item.title === activeMenu)
                ?.subItems.map((section, index) => (
                  <Box key={index}>
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      mb={4}
                      color="gray.700"
                      textAlign="center"
                    >
                      {section.title}
                    </Text>
                    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                      {section.subItems?.map((subItem, subIndex) => (
                        <GridItem key={subIndex}>
                          <Box
                            cursor="pointer"
                            onClick={() => {
                              navigate(subItem.path);
                              setIsDropdownOpen(false);
                              setActiveMenu(null);
                            }}
                            _hover={{ color: "blue.500" }}
                            transition="color 0.2s"
                          >
                            <Text
                              textAlign="center"
                              fontSize="lg"
                              fontWeight="medium"
                              color="gray.700"
                              _hover={{ color: "blue.500" }}
                              transition="color 0.2s"
                            >
                              {subItem.title}
                            </Text>
                          </Box>
                        </GridItem>
                      ))}
                    </Grid>
                  </Box>
                ))}
            </Grid>
          ) : activeMenu === "교육훈련" ? (
            <Grid templateColumns="repeat(2, 1fr)" gap={8}>
              {menuItems
                .find((item) => item.title === activeMenu)
                ?.subItems.map((section, index) => (
                  <Box key={index}>
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      mb={4}
                      color="gray.700"
                      textAlign="center"
                    >
                      {section.title}
                    </Text>
                    <VStack gap={4} align="stretch">
                      {section.subItems?.map((subItem, subIndex) => (
                        <Box
                          key={subIndex}
                          cursor="pointer"
                          onClick={() => {
                            navigate(subItem.path);
                            setIsDropdownOpen(false);
                            setActiveMenu(null);
                          }}
                          _hover={{ color: "blue.500" }}
                          transition="color 0.2s"
                        >
                          <Text
                            textAlign="center"
                            fontSize="lg"
                            fontWeight="medium"
                            color="gray.700"
                            _hover={{ color: "blue.500" }}
                            transition="color 0.2s"
                          >
                            {subItem.title}
                          </Text>
                        </Box>
                      ))}
                    </VStack>
                  </Box>
                ))}
            </Grid>
          ) : (
            <Grid templateColumns="repeat(4, 1fr)" gap={8}>
              {menuItems
                .find((item) => item.title === activeMenu)
                ?.subItems.map((subItem, index) => (
                  <GridItem key={index}>
                    <Box
                      cursor="pointer"
                      onClick={() => {
                        navigate(subItem.path);
                        setIsDropdownOpen(false);
                        setActiveMenu(null);
                      }}
                      _hover={{ color: "blue.500" }}
                      transition="color 0.2s"
                    >
                      <Text
                        textAlign="center"
                        fontSize="lg"
                        fontWeight="medium"
                        color="gray.700"
                        _hover={{ color: "blue.500" }}
                        transition="color 0.2s"
                      >
                        {subItem.title}
                      </Text>
                    </Box>
                  </GridItem>
                ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* 모바일 사이드바 */}
      {!isDesktop && (
        <Box
          position="fixed"
          top={`${headerHeight}px`}
          left={0}
          h={`calc(100vh - ${headerHeight}px)`}
          w={isSidebarOpen ? "250px" : "0"}
          bg="white"
          boxShadow={isSidebarOpen ? "lg" : "none"}
          transition="all 0.3s ease"
          overflowX="hidden"
          overflowY="auto"
          zIndex={999}
        >
          <VStack align="stretch" gap={0}>
            {menuItems.map((item) => (
              <Box key={item.title}>
                <Text p={4} bg="gray.50" fontWeight="bold" color="gray.700">
                  {item.title}
                </Text>
                <VStack align="stretch" gap={0}>
                  {item.title === "교회소개"
                    ? item.subItems.map((section) => (
                        <Box key={section.title}>
                          <Text
                            p={4}
                            pl={6}
                            bg="gray.100"
                            fontWeight="semibold"
                            color="gray.700"
                          >
                            {section.title}
                          </Text>
                          {section.subItems?.map((subItem) => (
                            <Text
                              key={subItem.title}
                              p={4}
                              pl={8}
                              cursor="pointer"
                              onClick={() => {
                                navigate(subItem.path);
                                setIsSidebarOpen(false);
                              }}
                              _hover={{ bg: "gray.50" }}
                              whiteSpace="nowrap"
                              overflow="hidden"
                              textOverflow="ellipsis"
                            >
                              {subItem.title}
                            </Text>
                          ))}
                        </Box>
                      ))
                    : item.subItems.map((subItem) => (
                        <Text
                          key={subItem.title}
                          p={4}
                          pl={8}
                          cursor="pointer"
                          onClick={() => {
                            navigate(subItem.path);
                            setIsSidebarOpen(false);
                          }}
                          _hover={{ bg: "gray.50" }}
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          {subItem.title}
                        </Text>
                      ))}
                </VStack>
              </Box>
            ))}
          </VStack>
        </Box>
      )}

      {/* 메인 컨텐츠 */}
      <Box
        pt={`${headerHeight}px`}
        pb={8}
        minH={`calc(100vh - ${headerHeight}px)`}
      >
        <Container>
          <Outlet />
        </Container>
      </Box>

      {/* 푸터 */}
      <Box bg="gray.100" py={8}>
        <Container maxW="1200px">
          <VStack gap={4} align="start">
            <Text fontSize="sm" color="gray.700">
              감사교회
            </Text>
            <Text fontSize="sm" color="gray.700">
              주소: 서울특별시 양천구
            </Text>
            <Text fontSize="sm" color="gray.700">
              전화: 02-123-4567 | 이메일: info@example.com
            </Text>
            <Text fontSize="sm" color="gray.700">
              © {new Date().getFullYear()} 감사교회. All rights reserved.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
