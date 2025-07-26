import { Box, Text, Image, VStack, Heading } from "@chakra-ui/react";

export function KinderPresentation() {
    return (
        <Box>
            <Image 
                src="/assets/Sheep_background.png" 
                alt="유치부" 
                width="100%"
                height="auto"
                objectFit="cover"
                maxHeight="350px"
            />
            <VStack gap={4} p={6} align="center">
                <Heading as="h1" size="xl" color="blue.600">
                    유치부
                </Heading>
                <Text fontSize="lg" textAlign="center" color="gray.700" maxWidth="600px">
                    하나님의 사랑을 배우며 함께 성장하는 우리 아이들
                </Text>
                <Text fontSize="md" textAlign="center" color="gray.600" maxWidth="600px">
                    어린이들이 하나님의 말씀을 통해 기쁨과 사랑을 배우고, 
                    친구들과 함께 신앙의 기초를 다지는 소중한 시간입니다.
                </Text>
            </VStack>
        </Box>
    )
}

export default KinderPresentation;