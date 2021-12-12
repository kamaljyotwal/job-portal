import React from "react";
import "./homecontent.css";

const content1Data = [
  {
    heading: "Get more visibility & exposure",
    content:
      "It’s our attention to the small stuff, scheduling of timelines and keen project management. We are creative,",
  },
  {
    heading: "organise your candidates",
    content: "First Impressions is comprised of specialists with corporate and agency oun",
  },
  {
    heading: "verify their abilities & Skills",
    content:
      "The purpose of employee testing is to help the employer predict how well an individual on the job.  and ",
  },
];

const homeImgData = [
  { link: "/assests/companies/first.png" },
  { link: "/assests/companies/second.png" },
  { link: "/assests/companies/three.png" },
  { link: "/assests/companies/four.png" },
  { link: "/assests/companies/five.png" },
  { link: "/assests/companies/six.png" },
  { link: "/assests/companies/seven.png" },
  { link: "/assests/companies/eight.png" },
  { link: "/assests/companies/nine.png" },
];

export default function HomeContent() {
  return (
    <>
      <div className="con-outer">
        <div className="con1">
          <h4>Why Us</h4>
          <div className="each-con-con">
            {content1Data.map((i) => (
              <div className="each-con">
                <p className="heading">{i.heading}</p>
                <p className="text">{i.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="con2">
          <h4>companies who trust us</h4>
          <div className="img-cont">
            {homeImgData.map((i) => (
              <div className="inner-con" key={i.index}>
                <img src={i.link} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="con3">
          <p>@Copyright MyJobs 2021</p>
        </div>
      </div>
    </>
  );
}
