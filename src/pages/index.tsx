import { Box, Flex, Text, Grid, Image, useBreakpointValue, GridItem, Divider, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import CardItems from "../components/InfosIcons";
import InfosIcons from "../components/InfosIcons";
import { Slider } from "../components/Slider";


export default function Home() {

  return (
    <>
      <Banner />

      <CardItems />
      <Flex mt="82px">
        <Box w={["60px", "90px"]} mx="auto" h="2px" bg="gray.700" my={["9", "20"]} />
      </Flex>


      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg",
          "3xl",
          "4xl"]}
      >
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Slider />
    </>
  )
}
