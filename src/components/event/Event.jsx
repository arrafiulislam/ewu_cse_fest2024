import React from "react";
import "./Event.css";
import programmingIcon from "./../../assets/animatedIcon/php-unscreen.gif";
import soccerIcon from "./../../assets/animatedIcon/ball-unscreen.gif";
import roboIcon from "./../../assets/animatedIcon/robot-unscreen.gif";
import showCaseIcon from "./../../assets/animatedIcon/screen-unscreen.gif";
import gamingIcon from "./../../assets/animatedIcon/game-controller-unscreen.gif";
import olympiadIcon from "./../../assets/animatedIcon/chemistry.png";
import bannerImg from "./../../assets/images/banner.jpg";

const Event = () => {
  return (
    <div className="event-details-section  ">
      {/* Event COntainer */}
      <div className="container">
        <div className="event-container">
          <img src={bannerImg} alt="" className="banner-img" />
          <p className="event-heading">Event Details</p>
        </div>

        {/* Event Details */}
        <p className="event-details">
          🌟 Get ready to immerse yourself in the most awaited event of the year
          – CSE FEST 2024, where boundless creativity meets boundless
          inspiration! <br /> <br />
          🚀 This event, organized by the Computer Science and Engineering
          Department of East West University, will surely grab everyone's
          attention in our community with its mix of tech and culture event.{" "}
          <br /> <br />
          🎨 Here's a glimpse of what awaits you:
        </p>
        {/* Event SEgment Cards */}
        <div className="event-segment">
          <div className="segmant-card">
            <img src={programmingIcon} alt="" className="card-img" />
            <p className="card-details">
              <span className="card-title">
                Intra University Programming Contest
              </span>
              <br /> <br /> Participation in an Intra University Programming
              Contest allows students to solve coding challenges within a time
              limit, enhancing problem-solving and teamwork skills.
            </p>
          </div>
          <div className="segmant-card">
            <img src={soccerIcon} alt="" className="card-img" />
            <p className="card-details">
              <span className="card-title">Robo Soccer </span>
              <br /> <br /> Participating in Robo Soccer will foster your skills
              in robotics, programming, and teamwork. Successful teams may earn
              recognition, prizes.
            </p>
          </div>
          <div className="segmant-card">
            <img src={roboIcon} alt="" className="card-img" />
            <p className="card-details">
              <span className="card-title">Line Follower Robo </span>
              <br /> <br />
              Participating in Line Follower Robo will develop your skills in
              robotics, programming, problem-solving. Successful teams earn
              recognition,avenues for advancement in robotics
            </p>
          </div>
          <div className="segmant-card">
            <img src={showCaseIcon} alt="" className="card-img" />
            <p className="card-details">
              <span className="card-title">Intra Project Showcasing </span>
              <br />
              <br /> Participating in an Intra Project Showcasing enhances
              presentation, communication, and teamwork skill. Recognition and
              feedback received can bolster resumes and academic portfolios
            </p>
          </div>
          <div className="segmant-card">
            <img src={gamingIcon} alt="" className="card-img" />
            <p className="card-details">
              <span className="card-title">Inter University Gaming</span>
              Contest <br />
              <br /> Participating in Inter University Gaming Contest cultivates
              teamwork, strategic thinking, and gaming skills. Success may lead
              to recognition, prizes, and opportunities for networking and
              advancement in the gaming industry.
            </p>
          </div>

          <div className="segmant-card">
            <img src={olympiadIcon} alt="" className="card-img" />
            <p className="card-details">
              <span className="card-title">Inter University IT Olympiad</span>
              <br /> <br />
              Participating in an Inter University IT Olympiad involves
              competing in diverse IT-related challenges against teams from
              other universities. It hones problem-solving, critical thinking,
              and IT skills.
            </p>
          </div>
          {/* Card End */}
        </div>
        <p className="date event-details">
          📅 Mark your calendars for April 24-25, 2024, and let the adventure
          begin!
          <br /> <br />
          ⏳ Don't miss out on this extraordinary opportunity to witness
          innovation, talent, and camaraderie at its finest. Stay tuned for
          exciting announcements, updates, and surprises!
          <br /> <br />
          🎉 Spread the word, tag your friends, and together, let's make CSE
          FEST 2024 an unforgettable celebration of the limitless possibilities
          of the digital era!
          <br />
          <p className="event-details">
            <span className="venue">VENUE:</span> East West University
          </p>
          <br /> <br />
          #EastWestUniversity #TechFestival #EWUCSEFEST2024 #Valorous #fifa
          <br /> <br />
        </p>
        <p className="registration-segmant">Hurry Up! Register Now!</p>
        <button className="reg-btn">Register Now</button>
      </div>
    </div>
  );
};

export default Event;
