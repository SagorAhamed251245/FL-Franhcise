import React from "react";
import Vector from "../SVG/Vector";

const ServicesCard = ({ i, url, text, classNames }) => {
  const position = (i !== 0 && i % 2) === 1 ? "down" : "up";

  const sectionStyle = position === "down" ? { marginTop: "25px" } : {};

  return (
    <section className={`service_card ${classNames}`} style={sectionStyle}>
      <>
        <div>
          <img src={url} alt={`Service ${i}`} />
        </div>
        <p>{text}</p>

        <Vector
          color={i === 0 ? "#ff0000" : "#f27272"}
          classNames="large-vector"
        />

        <Vector
          size={"35"}
          color={i === 0 ? "#ff0000" : "#f27272"}
          classNames="mobile-vector"
        />
      </>
    </section>
  );
};

export default ServicesCard;
