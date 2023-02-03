import React from "react";
import Link from "next/link";
import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 35 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
          >
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
            <br />
            <Text className={"mt-8"} color={"red.300"}>
              <Link href={"https://www.piaic.org"} target={"_blank"}>
                https://www.piaic.org
              </Link>
            </Text>
          </Heading>
          <Text color={"gray.600"}>
            Certified Web 3.0 and Metaverse Developer A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet Consolidating Web 3.0, Metaverse,
            Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT,
            Network Automation, and Bioinformatics Technologies
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default HeroSection;
