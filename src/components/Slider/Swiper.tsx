import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,
    Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export function SwiperSl() {
    return (

        <Swiper
            navigation={true}
            className="mySwiper"
            autoplay={{
                delay: 4000,
            }}
        >
            <SwiperSlide>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="/images/bangkok.jpeg"
                    bgPosition="100% 30%"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                >
                    <Heading fontSize={["3xl", "4xl", "5xl"]} color="light.100" fontWeight="bold">Bangkok</Heading>
                    <Text fontWeight="bold" color="light.500" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O país mais visitado</Text>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="/images/hong-kong.jpeg"
                    bgPosition="100% 30%"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                >
                    <Heading fontSize={["3xl", "4xl", "5xl"]} color="light.100" fontWeight="bold">Hong Kong</Heading>
                    <Text fontWeight="bold" color="light.500" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>Número um de país mais procurado</Text>

                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="/images/london.jpeg"
                    bgPosition="100% 30%"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                >
                    <Heading fontSize={["3xl", "4xl", "5xl"]} color="light.100" fontWeight="bold">London</Heading>
                    <Text fontWeight="bold" color="light.500" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>País mais visitado pelos Brasileiros</Text>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="/images/macau.jpeg"
                    bgPosition="100% 30%"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                >
                    <Heading fontSize={["3xl", "4xl", "5xl"]} color="light.100" fontWeight="bold">Macau</Heading>
                    <Text fontWeight="bold" color="light.500" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>Descobrir mais sobre o país</Text>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="/images/singapore.jpeg"
                    bgPosition="100% 30%"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                >
                    <Heading fontSize={["3xl", "4xl", "5xl"]} color="light.100" fontWeight="bold">Singapore</Heading>
                    <Text fontWeight="bold" color="light.500" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O país mais rico</Text>
                </Flex>
            </SwiperSlide>

        </Swiper>
    )
}