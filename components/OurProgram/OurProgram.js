import React from "react";
import FirstCard from "./FirstCard";
import SecCard from "./SecCard";
import LastCard from "./LastCard";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";

const OurProgram = () => {
  return (
    <>
      <h4 className="title" style={{ margin: "120px 0", textAlign: "center" }}>
        Our Program
      </h4>
      <section className="our_program ">
        <div className="container our_program_cards">
          <FirstCard />
          <SecCard />
          <LastCard />
        </div>
        <h4
          className="title"
          style={{ margin: "120px 0", textAlign: "center", color: "white" }}
        >
          Recommendation for This Course
        </h4>
        <RecommendationForCourse />
      </section>
    </>
  );
};

export default OurProgram;
