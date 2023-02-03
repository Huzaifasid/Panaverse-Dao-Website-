import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <Image
              borderRadius="full"
              boxSize="80px"
              src="/logo.jpeg"
              alt="Dan Abramov"
            />
            <span className="ml-3 text-xl">Panavers Dao</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className=" mr-3  md:mr-5 hover:text-white">
              Home
            </Link>
            <Link href={"/courses"} className=" mr-3 md:mr-5 hover:text-white">
              Courses
            </Link>
            <Link href={"/syllabus"} className=" mr-3 md:mr-5 hover:text-white">
              Syllabus
            </Link>
            <Link href={"/contact"} className=" mr-3 md:mr-5 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
