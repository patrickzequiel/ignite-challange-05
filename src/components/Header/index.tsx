import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
    return (
        <Flex
            aa="header"
            w="100%"
            maxWidth={1480}
            h="100"
            mx="auto"
            mt="0"
            px="6"
            align="center"
            justify='center'
        >
            <Flex>
                <Link href="/">
                    <Image src="/Logo.svg"alt="Logo" w={["80px", "185px"]} />
                </Link>
            </Flex>
        </Flex>
    )
}