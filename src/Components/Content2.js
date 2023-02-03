import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

const Content2 = () => {
  return (
    <>
      <Container maxW={"8xl"} className="pt-10">
        <Heading>Core Courses (Common in All Specializations):</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          Every participant of the program will start by completing the
          following three core courses:
        </Text>
      </Container>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://media.licdn.com/dms/image/C4E12AQEVAXOI_qinZw/article-cover_image-shrink_720_1280/0/1591882060708?e=2147483647&v=beta&t=TSTjnPqtDKDhxGSUc7hnSrriC6dxGR2ciBcNYIk6WXY"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Quarter I (Core)
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CS-101: Object-Oriented Programming using TypeScript
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
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://og-image.planetscale.com/Connect%20a%20Next.js%20application%20to%20PlanetScale.png?theme=dark&direction=row&md=1&fontSize=100px&images=https%3A%2F%2Fog-image.planetscale.com%2Fimages%2Fps-logo-white-v2.svg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Quarter II (Core)
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                    Cloud Apps and APIs using Next.js 13 and Cloud Development
                    Kit (CDK) for Terraform
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
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-top"
                  src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/FSIjaoI2QtKWZL65cogd"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Quarter III (Core)
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    $-101: Dollar Making Bootcamp - Full-Stack Template and API
                    Product Development
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
          </div>
        </div>
      </section>

      <Container maxW={"8xl"} className="pt-10 pb-10">
        <Heading>Specialized Tracks:</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each:
        </Text>
      </Container>
    </>
  );
};

export default Content2;
