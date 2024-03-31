import React from "react";
import "./Voice.css";
import messageVideo from "./../../assets/video/message.mp4";

const Voice = () => {
  return (
    <div className="container">
      <div className="message-container">
        <p className="message-header">
          Get an insider's look into the electrifying atmosphere of our CSE
          Fest! <br /> <br />
          <span className="light-des">
            Join our students and faculty as they share their experiences,
            enthusiasm, and insights, giving you a glimpse of the innovative
            projects, spirited competitions, and memorable moments that define
            our celebration of computer science excellence
          </span>
        </p>
        <video
          src={messageVideo}
          controls
          autoPlay
          className="messageVideo message-container"
        ></video>
      </div>
    </div>
  );
};

export default Voice;
