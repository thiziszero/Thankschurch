import { Box, Text, Button, HStack } from "@chakra-ui/react";
import { showToast } from "../../../components/ui/toaster";
import { FaCopy } from "react-icons/fa";

export function LocationPresentation({ mapRef }: { mapRef: React.RefObject<HTMLDivElement> }) {
    const handleCopyAddress = () => {
        navigator.clipboard.writeText('서울특별시 양천구 목동 709-2번지 2층');
        showToast({
            title: "✅ 주소가 복사되었습니다.",
        });
    };

    return (
        <Box bg="white">
            <Box maxW="1200px" mx="auto" px={4} py={4}>
                <Text 
                    fontSize="3xl" 
                    fontWeight="bold" 
                    color="green.600" 
                    mb={12}
                    textAlign="left"
                >
                    오시는 길
                </Text>
                
                <Box
                    ref={mapRef}
                    mx="auto"
                    width="100%"
                    height="500px"
                    maxWidth="70%"
                    borderRadius="md"
                    overflow="hidden"
                />
                
                <HStack 
                    justify="center" 
                    mt={4} 
                    p={4} 
                    bg="gray.50" 
                    borderRadius="md" 
                    maxWidth="70%" 
                    mx="auto"
                    gap={2}
                >
                    <Text 
                        color="gray.900" 
                        fontSize={{ base: "sm", md: "md" }}
                        whiteSpace="nowrap"
                    >
                        서울특별시 양천구 목동 709-2번지 2층
                    </Text>
                    <Button
                        aria-label="주소 복사"
                        size="sm"
                        variant="ghost"
                        p={2}
                        onClick={handleCopyAddress}
                        _hover={{ bg: "gray.100" }}
                    >
                        <FaCopy size={16} />
                    </Button>
                </HStack>
            </Box>
        </Box>
    );
}

export default LocationPresentation;