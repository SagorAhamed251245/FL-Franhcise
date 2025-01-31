import React from "react";

const RightSide = () => {
  return (
    <div className="founder_info_right">
      <div className="img_div">
        <img src="/images/image/founder.png" />
      </div>
      <div className="video_card">
        <div className="single_video">
          <div className="div">
            <iframe
              id="founder"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="video"
              src="https://www.youtube.com/embed/twXQQu-z5uA?si=JB19pd8khwIcCs3K"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video_relative"></div>
        </div>
      </div>
      <img className="yellowVector" src="/images/svg/Vector 16.svg" />
    </div>
  );
};

export default RightSide;
