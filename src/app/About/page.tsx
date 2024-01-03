import CommonDivider from "@/components/common/homeDivider/commonDivider";
import Patner from "@/containers/Patner/Patner";
import Quotes from "@/containers/Quotes/Quotes";
import SubsCribePage from "@/containers/Subscribe/subsCribe";
import Topselling from "@/containers/topSelling/topSelling";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <CommonDivider Name="About" />
        <Topselling />
        <Quotes />
        <SubsCribePage />
        <Patner />
      </div>
    </>
  );
};

export default About;
