import { Flex } from "@chakra-ui/react";
import { SwiperSl } from "./Swiper";

export function Slider() {
    return (
        <Flex
            w="100%" 
            h={["250px", "450px"]} 
            maxW="1240px" 
            mx="auto" 
            mb={["5", "10"]}
        >
            <SwiperSl />
        </Flex>
    )
}