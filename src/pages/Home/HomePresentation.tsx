import {
  Box,
  Image,
  Text,
  IconButton,
  Container,
  SimpleGrid,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  FaYoutube,
  FaQrcode,
  FaChurch,
  FaBook,
  FaStar,
  FaMapMarkerAlt,
  FaHome,
  FaShareAlt,
  FaQuestion,
  FaUserTie,
  FaSync,
} from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface HomePresentationProps {
  churchName: string;
  slogan: string;
  schedules: {
    title: string;
    time: string;
  }[];
  weeklyBulletin: {
    title: string;
    description: string;
  };
  currentVideoSrc: string;
  onPrevVideo: () => void;
  onNextVideo: () => void;
  totalVideos: number;
  currentVideoIndex: number;
}

const HomePresentation: React.FC<HomePresentationProps> = (props) => {
  return (
    <Box width="100%">
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          {/* 이미지 섹션 */}
          <MotionBox
            width="100%"
            bg="gray.50"
            py={4}
            px={4}
            borderRadius="xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.4,
                },
              },
            }}
          >
            <Box maxW="1200px" mx="auto">
              <MotionBox
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1.2,
                    },
                  },
                }}
              >
                <Box
                  style={{
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  <Image
                    src="/assets/always_thanks.jpg"
                    alt="home"
                    width="100%"
                    objectFit="cover"
                  />
                </Box>
              </MotionBox>
              <MotionBox
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1.2,
                    },
                  },
                }}
                mt={4}
              >
                <Box
                  style={{
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  <Image
                    src="/assets/main_img_crop.jpg"
                    alt="main"
                    width="100%"
                    objectFit="cover"
                  />
                </Box>
              </MotionBox>
            </Box>
          </MotionBox>

          {/* 메뉴 그리드 섹션 */}
          <MotionBox
            width="100%"
            bg="blue.50"
            py={8}
            px={4}
            mt={8}
            borderRadius="xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <Box maxW="1200px" mx="auto">
              <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} gap={4}>
                {/* 첫째 줄 */}
                <MotionVStack
                  as="button"
                  bg="pink.200"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@thankgodchurch",
                      "_blank"
                    )
                  }
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaYoutube} boxSize={8} color="white" />
                  <Text
                    color="white"
                    fontSize="sm"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    감사교회{"\n"}YouTube
                  </Text>
                </MotionVStack>

                <MotionVStack
                  as="button"
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  border="1px"
                  borderColor="gray.200"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaChurch} boxSize={8} color="pink.300" />
                  <Text color="gray.700" fontSize="sm" fontWeight="bold">
                    교회 소개
                  </Text>
                </MotionVStack>

                <MotionVStack
                  as="button"
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  border="1px"
                  borderColor="gray.200"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaBook} boxSize={8} color="pink.300" />
                  <Text color="gray.700" fontSize="sm" fontWeight="bold">
                    주보
                  </Text>
                </MotionVStack>

                <MotionVStack
                  as="button"
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  border="1px"
                  borderColor="gray.200"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaUserTie} boxSize={8} color="pink.300" />
                  <Text color="gray.700" fontSize="sm" fontWeight="bold">
                    노병기 목사
                  </Text>
                </MotionVStack>

                <MotionVStack
                  as="button"
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  border="1px"
                  borderColor="gray.200"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaStar} boxSize={8} color="pink.300" />
                  <Text color="gray.700" fontSize="sm" fontWeight="bold">
                    기관 행사
                  </Text>
                </MotionVStack>

                <MotionVStack
                  as="button"
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  border="1px"
                  borderColor="gray.200"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaMapMarkerAlt} boxSize={8} color="pink.300" />
                  <Text color="gray.700" fontSize="sm" fontWeight="bold">
                    오시는 길
                  </Text>
                </MotionVStack>

                {/* 둘째 줄 */}
                <MotionVStack
                  as="button"
                  bg="blue.600"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaQrcode} boxSize={8} color="white" />
                  <Text color="white" fontSize="sm" fontWeight="bold">
                    도서
                  </Text>
                </MotionVStack>

                <MotionVStack
                  as="button"
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  border="1px"
                  borderColor="gray.200"
                  onClick={() =>
                    window.open("http://www.egau.co.kr/", "_blank")
                  }
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaHome} boxSize={8} color="pink.300" />
                  <Text color="gray.700" fontSize="sm" fontWeight="bold">
                    복음주의 대각성 연합회
                  </Text>
                </MotionVStack>

                <MotionVStack
                  as="button"
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  border="1px"
                  borderColor="gray.200"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaShareAlt} boxSize={8} color="pink.300" />
                  <Text color="gray.700" fontSize="sm" fontWeight="bold">
                    나눔 커뮤니티
                  </Text>
                </MotionVStack>

                <MotionVStack
                  as="button"
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  border="1px"
                  borderColor="gray.200"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaQuestion} boxSize={8} color="pink.300" />
                  <Text color="gray.700" fontSize="sm" fontWeight="bold">
                    상담/문의
                  </Text>
                </MotionVStack>

                <MotionVStack
                  as="button"
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  border="1px"
                  borderColor="gray.200"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaUserTie} boxSize={8} color="pink.300" />
                  <Text color="gray.700" fontSize="sm" fontWeight="bold">
                    테스트
                  </Text>
                </MotionVStack>

                <MotionVStack
                  as="button"
                  bg="blue.300"
                  p={4}
                  borderRadius="lg"
                  gap={2}
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  }}
                  variants={fadeInUp}
                >
                  <Icon as={FaSync} boxSize={8} color="white" />
                  <Text color="white" fontSize="sm" fontWeight="bold">
                    기관 홈페이지{"\n"}수정요청
                  </Text>
                </MotionVStack>
              </SimpleGrid>
            </Box>
          </MotionBox>

          {/* 비디오 섹션 */}
          <MotionBox
            width="100%"
            bg="pink.50"
            py={{ base: 6, md: 8 }}
            px={{ base: 0, md: 4 }}
            mt={8}
            borderRadius="xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Box maxW="1200px" mx="auto">
              <Text
                fontSize="2xl"
                textAlign="left"
                fontWeight="bold"
                mb={4}
                px={{ base: 4, md: 0 }}
              >
                찬양
              </Text>
              <Box
                position="relative"
                display="flex"
                alignItems="center"
                gap={4}
              >
                {/* 데스크톱에서만 보이는 네비게이션 버튼 */}
                <IconButton
                  aria-label="이전 영상"
                  onClick={props.onPrevVideo}
                  colorScheme="blackAlpha"
                  variant="solid"
                  size="lg"
                  rounded="full"
                  zIndex={2}
                  display={{ base: "none", md: "flex" }}
                >
                  <MdChevronLeft size={32} />
                </IconButton>

                <Box flex="1" position="relative" paddingBottom="56.25%">
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                    src={props.currentVideoSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </Box>

                <IconButton
                  aria-label="다음 영상"
                  onClick={props.onNextVideo}
                  colorScheme="blackAlpha"
                  variant="solid"
                  size="lg"
                  rounded="full"
                  zIndex={2}
                  display={{ base: "none", md: "flex" }}
                >
                  <MdChevronRight size={32} />
                </IconButton>
              </Box>

              {/* 모바일 네비게이션 */}
              <Box
                display={{ base: "flex", md: "none" }}
                alignItems="center"
                justifyContent="center"
                gap={4}
                mt={4}
                px={4}
              >
                <IconButton
                  aria-label="이전 영상"
                  onClick={props.onPrevVideo}
                  colorScheme="blackAlpha"
                  variant="solid"
                  size="md"
                  rounded="full"
                >
                  <MdChevronLeft size={24} />
                </IconButton>

                <Text color="gray.600" fontSize="md" fontWeight="medium">
                  {props.currentVideoIndex + 1} / {props.totalVideos}
                </Text>

                <IconButton
                  aria-label="다음 영상"
                  onClick={props.onNextVideo}
                  colorScheme="blackAlpha"
                  variant="solid"
                  size="md"
                  rounded="full"
                >
                  <MdChevronRight size={24} />
                </IconButton>
              </Box>

              {/* 데스크톱 페이지 표시 */}
              <Text
                textAlign="center"
                mt={2}
                color="gray.600"
                fontSize="md"
                display={{ base: "none", md: "block" }}
              >
                {props.currentVideoIndex + 1} / {props.totalVideos}
              </Text>
            </Box>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePresentation;
