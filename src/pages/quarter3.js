import Link from "next/link";
import React from "react";

const Quarter3 = () => {
  return (
    <>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Quarter III (Core)
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Dollar Making Bootcamp - Full-Stack Template and API Product
              Development
            </p>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Earn While You Learn Projects
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Build Full-Stack Next.js 13 Jamstack Templates
              </h2>
              <p className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                You will be assigned to build a template which we will sell on
                Theme Forest and Panaverse DAO marketplace. The Panaverse DAO
                will receive 25% share on the sale of the template which will be
                used to manage the platform. An additional 15% will be spent on
                marketing the template. 60% of the revenues will be distributed
                to the developer through the Panaverse DAO in the form of
                Panaverse tokens.
              </p>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://github.com/panaverse/panaverse-template-standard"
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
                  The Template Standard
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Build QraphQL APIs
              </h2>
              <p className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                You will be assigned to build APIs for which you will sell
                subscriptions on the Panaverse DAO Marketplace. The Panaverse
                DAO will receive 25% share on the sale of the template which
                will be used to manage the platform. An additional 15% will be
                spent on marketing the template. 60% of the revenues will be
                distributed to the developer through the Panaverse DAO in the
                form of Panaverse tokens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quarter3;
