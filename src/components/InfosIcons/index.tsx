import { Box, Flex, Text, Image, useBreakpointValue, GridItem, Grid } from "@chakra-ui/react";
import InfosIcons from "./InfoIcons";

export default function CardItems() {

  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <InfosIcons icon="cocktail1" text="vida noturna" />
      </GridItem>
      <GridItem>
        <InfosIcons icon="surf1" text="praia" />
      </GridItem>
      <GridItem>
        <InfosIcons icon="building1" text="moderno" />
      </GridItem>
      <GridItem>
        <InfosIcons icon="museum1" text="clássico" />
      </GridItem>
      <GridItem>
        <InfosIcons icon="earth1" text="e mais..." />
      </GridItem>
    </Grid>
  )
}