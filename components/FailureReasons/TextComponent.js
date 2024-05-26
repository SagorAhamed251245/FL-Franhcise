import React from "react";
import LessThen from "../SVG/LessThen";

const TextComponent = () => {
  let features = [
    "Poor Time Management",
    "Insufficient Support",
    "Mismatched Expectations",
    "Personal Challenges",
    "Learning Style Compatibility",
  ];
  return (
    <section>
      <div>
        <h4 className="title">
          Bootcamp Students <br /> Failure Reasons
        </h4>
        <p style={{ width: "90%", margin: "30px 0" }}>
          Some students may enter bootcamps expecting instant mastery without
          realizing the intensive effort required.
        </p>
        <div className="features">
          {features.map((item, index) => (
            <p
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <span>
                <img src="/images/svg/tick-circle.svg" />
              </span>
              <span> {item}</span>
            </p>
          ))}
          <button className="book_a_meeting mb_hidden">
            Book a call
            <span>
              <LessThen color={"white"} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TextComponent;
