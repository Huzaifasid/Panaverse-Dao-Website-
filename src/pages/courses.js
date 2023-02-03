import React from "react";

import Content2 from "@/Components/Content2";
import Content3 from "@/Components/Content3";
import { content3Data } from "@/Components/content3data";

const Courses = () => {
  return (
    <>
      <Content2 />
      <Content3 data={content3Data} />
    </>
  );
};

export default Courses;
