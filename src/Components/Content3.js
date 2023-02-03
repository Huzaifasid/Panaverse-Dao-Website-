import React from "react";
import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Content3 = ({ data }) => {
  return (
    <>
      {data.map((i, ind) => {
        return (
          <div key={ind}>
            <Stack minH={"10vh"} direction={{ base: "column", md: "row" }}>
              <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    <Text
                      as={"span"}
                      position={"relative"}
                      className={"md:h-[30%] h-[20%] "}
                      _after={{
                        content: "''",
                        width: "full",
                        // height: useBreakpointValue({ base: "20%", md: "30%" }),
                        position: "absolute",
                        bottom: 1,
                        left: 0,
                        bg: "blue.400",
                        zIndex: -1,
                      }}
                    >
                      {i.txt1}
                    </Text>
                    <br />
                    <Text color={"blue.400"} as={"span"}>
                      {i.txt2}
                    </Text>
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                    {i.txt3}
                  </Text>
                </Stack>
              </Flex>
              <Flex flex={1}>
                <Image
                  alt={"Login Image"}
                  className="md:h-[424px] md:max-w-[80%] "
                  // objectFit={"cover"}
                  src={i.img1}
                />
              </Flex>
            </Stack>

            <section className="text-gray-600 body-font">
              <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3 m-auto">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={i.img2}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {i.H1}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {i.H2}
                        </h1>

                        <div className="flex items-center flex-wrap ">
                          <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 m-auto">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={i.img3}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {i.H3}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {i.H4}
                        </h1>

                        <div className="flex items-center flex-wrap">
                          <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default Content3;
