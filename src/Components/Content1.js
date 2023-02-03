import React from "react";
import Link from "next/link";
import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
const Content1 = () => {
  return (
    <Box>
      <Stack
        spacing={4}
        as={Container}
        className={""}
        maxW={"3xl"}
        textAlign={"center"}
      >
        <Heading fontSize={"3xl"}>
          The Panaverse Community and Syllabus:
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          <Link href={"https://www.panaverse.co"} target={"_blank"}>
            https://www.panaverse.co
          </Link>
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          The internet is without a doubt the most important technological
          development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
          Edge technologies expand the internet as we know it by introducing
          novel features and advancements. Metaverse will make use of all
          aspects of modern technology, including 3D, VR, AR, AI, blockchain,
          cloud and edge computing, voice computing, ambient computing, and
          more.
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          Citi is the latest Wall Street business to give a positive prognosis
          for Web 3.0 and the Metaverse, terms used to depict a future internet
          vision centered on decentralized technologies and virtual worlds. Citi
          stated in a March 2022 research paper that the metaverse economy might
          have a total addressable market of up to $13 trillion and five billion
          people by 2030.
          <br />
          <Link
            href={"https://www.citivelocity.com/citigps/metaverse-and-money/"}
            target={"_blank"}
            className={"md:text-[14px] text-blue-500"}
          >
            https://www.citivelocity.com/citigps/metaverse-and-money/
          </Link>
        </Text>

        <Heading fontSize={"2xl"} color={"red.500"}>
          The Program in a Nutshell: Earn While You Learn
        </Heading>
        <Text color={"gray.600"} fontSize={"1xl"}>
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program&apos;s beginning. It resembles a
          cross between a corporate venture and an educational project.
        </Text>
        <Heading fontSize={"2xl"} color={"red.500"}>
          Program of Studies
        </Heading>
        <Text color={"gray.600"} fontSize={"1xl"}>
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first three quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects. To accommodate everyone, courses will be
          held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
          weekdays. It employs a hybrid teaching format, with core onsite
          classes complemented by online Zoom laboratories and recorded videos.
        </Text>
      </Stack>
    </Box>
  );
};

export default Content1;
