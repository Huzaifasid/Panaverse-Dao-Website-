import Link from "next/link";
import React from "react";

const Quarter1 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Quarter I (Core)
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Object-Oriented Programming using TypeScript
            </p>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              We will start the program by learning the fundamentals of
              Object-Oriented programming using JavaScript and TypeScript. We
              will also understand the latest Web trends i.e. Web 3.0 and
              Metaverse concepts and try to understand their working from the
              perspective of the users.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                HTML and CSS (Homework)
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
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
                  Learn HTML by Hira Khan (Watch Recorded Videos)
                </Link>
                <Link
                  href={
                    "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
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
                  Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Web 3.0 and Metaverse Theory
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
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
                  Introduction to Panaverse DAO
                </Link>
                <Link
                  href={
                    "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
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
                  Web 3.0 User Guide
                </Link>
                <Link
                  href={
                    "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
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
                  Complete Web 3 Assignments included in the Web 3 User Guide
                  Virtual and Augmented Metaverse User Guide
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Fundamentals of JavaScript (ECMAScript 2022 Language
                Specification)
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
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
                  Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
                </Link>
                <Link
                  href={
                    "https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4 "
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
                  Chapters 2-6, 13 of JavaScript from Beginner to Professional:
                  Learn JavaScript quickly by building fun, interactive, and
                  dynamic web apps, games, and pages
                </Link>
                <Link
                  href={
                    "https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
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
                  JavaScript Book Code
                </Link>
                <Link
                  href={
                    "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md "
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
                  Getting Started Exercises with JavaScript and Node.js
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Object-Oriented Programming with TypeScript
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1"
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
                  Chapters 1-11 of Learning TypeScript: Enhance Your Web
                  Development Skills Using Type-Safe JavaScript
                </Link>
                <Link
                  href={"https://github.com/panaverse/learn-typescript"}
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
                  Learning Repository
                </Link>
                <Link
                  href={"https://www.learningtypescript.com/"}
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
                  In Class Companion projects and articles for Learning
                  TypeScript
                </Link>
                <Link
                  href={"https://github.com/panaverse/typescript-node-projects"}
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
                  Homework Project
                </Link>
                <Link
                  href={"https://profy.dev/article/react-typescript"}
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
                  Minimal TypeScript Crash Course For React With Interactive
                  Code Exercises
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quarter1;
