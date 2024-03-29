import { Typography } from "@mui/material";
import React from "react";
import imageSrc from "../../assets/Images/IMG_3986.jpg";
import CostumeTimeline, {
  CostumeTimelineSeparator,
} from "../Timeline/Timeline.js";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import resumeData from "../../Utils/ResumeData";

import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

import "./Profile.css";

const CostumeTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CostumeTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}:</span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={imageSrc} alt="" />
      </figure>
      <div className="profile_information">
        <CostumeTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CostumeTimelineItem title="Name" text={resumeData.name} />
          <CostumeTimelineItem title="Title" text={resumeData.title} />
          <CostumeTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CostumeTimelineItem
              key={key}
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CostumeTimeline>
        <div className="button_container" style={{ display: "flex" }}>
          <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
