import React from "react";
import "./homecontent.css";

const content1Data = [
  {
    id: 1,
    heading: "Get more visibility & exposure",
    content:
      "It’s our attention to the small stuff, scheduling of timelines and keen project management. We are creative,",
  },
  {
    id: 2,
    heading: "organise your candidates",
    content: "First Impressions is comprised of specialists with corporate and agency oun",
  },
  {
    id: 3,
    heading: "verify their abilities & Skills",
    content:
      "The purpose of employee testing is to help the employer predict how well an individual on the job.  and ",
  },
];

const homeImgData = [
  { id: 1, link: "/assets/companies/first.png" },
  { id: 2, link: "/assets/companies/second.png" },
  { id: 3, link: "/assets/companies/three.png" },
  { id: 4, link: "/assets/companies/four.png" },
  { id: 5, link: "/assets/companies/five.png" },
  { id: 6, link: "/assets/companies/six.png" },
  { id: 7, link: "/assets/companies/seven.png" },
  { id: 8, link: "/assets/companies/eight.png" },
  { id: 9, link: "/assets/companies/nine.png" },
];

export default function HomeContent() {
  return (
    <>
      <div className="con-outer">
        <div className="con1">
          <h4>Why Us</h4>
          <div className="each-con-con">
            {content1Data.map((i) => (
              <div className="each-con" key={i.id}>
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
              <div className="inner-con" key={i.id}>
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
