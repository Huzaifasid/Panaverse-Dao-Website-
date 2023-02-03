import { useRouter } from "next/router";
import React from "react";

const Content4 = () => {
  const router = useRouter();
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Detailed Course Syllabus
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Certified Web 3.0 and Metaverse Developer
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Quarter I (Core)
                </h2>
                <h1 className="text-2xl text-gray-900 pt-5 pb-10 mb-4 border-b border-gray-200 leading-none">
                  CS-101: Object-Oriented Programming using TypeScript
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-3 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Duration: 13 Weeks
                </p>

                <p className="text-xs text-gray-500 mt-3 mb-1">
                  We will start the program by learning the fundamentals of
                  Object-Oriented programming using JavaScript and TypeScript.
                  We will also understand the latest Web trends i.e. Web 3.0 and
                  Metaverse concepts and try to understand their working from
                  the perspective of the users.
                </p>
                <button
                  onClick={() => router.push("/quarter1")}
                  className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                >
                  Details
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden">
                <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  Current
                </span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Quarter II (Core)
                </h2>
                <h1 className="text-2xl text-gray-900 pt-5 pb-10 mb-4 border-b border-gray-200 leading-none">
                  W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps
                  & APIs using Next.js 13
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Duration: 13 Weeks
                </p>

                <p className="text-xs text-gray-500 mt-3 mb-1">
                  The technologies covered in this course will include Next.js
                  13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma,
                  Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
                  Technologies & Cloud Development Kit for Terraform (CDKTF).
                </p>

                <button
                  onClick={() => router.push("/quarter2")}
                  className="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded"
                >
                  Details
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Quarter III (Core)
                </h2>
                <h1 className="text-2xl text-gray-900 pt-5 pb-10 mb-4 border-b border-gray-200 leading-none">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-3 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Duration: 13 Weeks
                </p>

                <p className="text-xs text-gray-500 mt-3">
                  Earn While You Learn Projects
                </p>
                <button
                  onClick={() => router.push("/quarter3")}
                  className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                >
                  Details
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Quarter IV
                </h2>
                <h1 className="text-2xl text-gray-900 pt-5 pb-10 mb-4 border-b border-gray-200 leading-none">
                  W3-351: Developing Smart Contracts and Planet-Scale Web 3.0
                  Dapps
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-3 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Duration: 13 Weeks
                </p>

                <p className="text-xs text-gray-500 mt-3 mb-1">
                  In this course you will learn how to develop Web 3.0 DApps,
                  create a project, deploy it in production, write smart
                  contracts, unit test them, and create user interfaces for
                  them. We will also learn to develop ERC-20 and NFT tokens,
                  DAOs, Oracles, etc.
                </p>
                <button
                  onClick={() => router.push("/quarter4")}
                  className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                >
                  Details
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content4;
