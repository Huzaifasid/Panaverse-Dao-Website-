import Link from "next/link";
import React from "react";

const Quarter4 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Quarter IV
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
            </p>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              In this course you will learn how to develop Web 3.0 DApps, create
              a project, deploy it in production, write smart contracts, unit
              test them, and create user interfaces for them. We will also learn
              to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note
              that in order to develop Web 3 applications you also need to build
              on top of Web 2.0 technologies which we have already covered in
              the previous quarters.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Blockchain and Metaverse Theory
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
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
                  The Metaverse: And How It Will Revolutionize Everything by
                  Matthew Ball
                </Link>
                <Link
                  href={
                    "https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"
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
                  Mastering Blockchain - Fourth Edition by Imran Bashir
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Smart Contract Development in Solidity
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={
                    "https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
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
                  Solidity Programming Essentials - Second Edition By Ritesh
                  Modi
                </Link>
                <Link
                  href={
                    "https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
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
                  Solidity Learning Repo
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Dapp Development using Ethers.js and Next.js 13
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={"https://github.com/panaverse/dapps-nextjs"}
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
                  Dapp Learning Repo
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                Blockchain Project: Create a Token and Launch ICO/IEO/IDO
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <Link
                  href={"https://phemex.com/blogs/what-is-a-dex-ido"}
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
                  Understand the difference between IDO vs. IEO vs. ICO
                </Link>
                <Link
                  href={"https://www.icolistingonline.com"}
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
                  ICO List Online
                </Link>
                <Link
                  href={"https://coincodex.com/ieo-list/binance/"}
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
                  Binance IEO List
                </Link>
                <Link
                  href={
                    "https://www.coinspeaker.com/ieo/platform/binance-launchpad/"
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
                  Binance Launchpad
                </Link>
                <Link
                  href={"https://appinventiv.com/blog/how-to-launch-an-ieo/"}
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
                  Read How to Launch an IEO
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quarter4;
