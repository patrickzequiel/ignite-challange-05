import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

interface InfosIconsProps {
  icon: string;
  text: string;
}

export default function InfosIcons({ icon, text }: InfosIconsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <>
      <Flex direction={["row", "column"]} align="center" justify="center">
        {isWideVersion ? <Image src={`/icons/${icon}.svg`} w="80px" /> : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
        <Text mt="4" fontSize="24px" fontWeight="semibold">
          {text}
        </Text>
      </Flex>
    </>
  )
}