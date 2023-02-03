import Link from "next/link";
import React from "react";

const Quarter2 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Quarter II (Core)
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs
              using Next.js 13 and Cloud Development Kit (CDK) for Terraform
            </p>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The objective of this course is to teach participants to develop
              customer-facing planet-scale Websites, Full-Stack Apps and
              templates, Dashboards, and Muti-Cloud Serverless APIs. By the end
              of the quarter, the participants will be able to develop and
              deploy web platforms like Facebook, Shopify, etc. The technologies
              covered in this course will include Next.js 13, Figma, Tailwind
              CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless
              (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud
              Development Kit for Terraform (CDKTF).
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Next.js 13 Web Development
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link href={"https://beta.nextjs.org/docs"} target={"_blank"}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Next 13 Official Documentation
                </Link>
                <Link href={"https://beta.reactjs.org/learn"} target={"_blank"}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Latest Learn React Official Website
                </Link>
                <Link
                  href={"https://github.com/panaverse/learn-nextjs"}
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Learn Next.js 13 Learning Repo
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Next.js 13 using Chakra UI (Remote Zoom Class)
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
                  }
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  CSS Flexbox Explained – Complete Guide to Flexible Containers
                  and Flex Items
                </Link>
                <Link
                  href={"https://chakra-ui.com/getting-started"}
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Chakra UI Docs
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
                Class)
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
                  }
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Designing and Prototyping Interfaces with Figma: Learn
                  essential UX/UI design principles by creating interactive
                  prototypes for mobile, tablet, and desktop by Fabio Staiano
                </Link>
                <Link
                  href={
                    "https://www.figma.com/community/file/768809027799962739"
                  }
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Figma Design Kit for TailwindCSS
                </Link>
                <Link
                  href={
                    "https://www.figma.com/community/file/971408767069651759"
                  }
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Chakra UI Figma Kit
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                API Routes with Next.js (Remote Zoom Class)
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={"https://nextjs.org/docs/api-routes/introduction"}
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  API Routes
                </Link>
                <Link
                  href={
                    "https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
                  }
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Build a tRPC CRUD API Example with Next.js
                </Link>
                <Link
                  href={
                    "https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
                  }
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Stop building REST APIs for your Next.js apps, use tRPC
                  instead
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                SQL and Prisma
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
                  }
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Start from scratch with relational databases
                </Link>
                <Link
                  href={"https://www.youtube.com/watch?v=5hzZtqCNQKk"}
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  SQL For Beginners Video Tutorial
                </Link>
                <Link
                  href={
                    "https://www.freecodecamp.org/news/dbms-and-sql-basics/"
                  }
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Database Management Systems and SQL – Tutorial for Beginners
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Next.js 13 using TailwindCSS (Remote Zoom Class)
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
                  }
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Modern CSS with Tailwind, Second Edition by Noel Rappin
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                AWS Application Composer (Remote Zoom Class)
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={"https://www.youtube.com/watch?v=BujE_tik5r8"}
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  What is AWS Application Composer?
                </Link>
                <Link
                  href={"https://www.youtube.com/watch?v=p411uh363jQ"}
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Event-driven apps with AWS Application Composer
                </Link>
                <Link
                  href={"https://aws.amazon.com/application-composer/"}
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Visually design and build serverless applications quickly
                </Link>
                <Link href={"https://aws.amazon.com/free/"} target={"_blank"}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Must Have: Create Free AWS Account
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Multi-Cloud GraphQL Serverless API Development with Cloud
                Development Kit for Terraform (CDKTF) (Remote Zoom Class)
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://github.com/panaverse/learn-multicloud-api-development"
                  }
                  target={"_blank"}
                >
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Learn Multicloud Serverless API Development using CDK
                  Terraform in Baby Steps
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quarter2;
