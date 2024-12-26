import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ENDPOINTS } from "../utils/constant";
import ProfileImage from "../assets/profile-image.avif"
import moment from "moment";

import {
  getAddress,
  getBasicDetails,
  getEducation,
  getProfesionalLinks,
  getProfestionDetails,
  getProfileImage,
  getProjectDetails,
  getSkills,
  getSummary,
} from "../services/userService";
import { IAddress, 
  IBasicDetails, 
  IEducation, 
  IExperience,
  IImages,
  IProfesionalLinks,
  IProjects,ISkills,
  IUserSummary } from "../utils/interface";

const Profile: React.FC = () => {
  const [userDetails, setUserDetails] = useState({
    DETAILS: {} as IBasicDetails,
    ADDRESS: [] as IAddress[],
    IMAGE: [] as IImages[],
    EXPERIENCE: [] as IExperience[],
    SUMMARY: [] as IUserSummary[],
    PROFESIONALLINKS: [] as IProfesionalLinks[],
    EDUCATION: [] as IEducation[],
    PROJECTS: [] as IProjects[],
    SKILLS: [] as ISkills[],
  });
  



  const params = useParams() as { id: string };
  console.log(params?.id);
  const gettingUserDetails = async (userId: string) => {
    const response = await Promise.all([
      getBasicDetails(userId),
      getAddress(userId),
      getProfileImage(userId),
      getProfestionDetails(userId),
      getSummary(userId),
      getProfesionalLinks(userId),
      getEducation(userId),
      getProjectDetails(userId),
      getSkills(userId),
    ]);

    const temp:any = {};
    for (const index in Object.keys(ENDPOINTS)) {
      if (!temp[Object.keys(ENDPOINTS)[index]]) {
        temp[Object.keys(ENDPOINTS)[index]] = [];
      }
      temp[Object.keys(ENDPOINTS)[index]] = response[index].data;
    }

    setUserDetails(temp);
  };

  useEffect(() => {
    gettingUserDetails("1");
  }, []);

  console.log(userDetails.EDUCATION);

  return (
    <div className="container">
      <div className="header">
        <img src={userDetails?.IMAGE[0]?.url}
           onError={(ev) => {
            (ev.target as HTMLInputElement).src =ProfileImage
          }}
         alt="Profile Image" className="profile-image" />
        <h1>{userDetails?.DETAILS?.name}</h1>
        <p>{userDetails?.DETAILS?.profile}</p>
      </div>

      <div className="section">
        <h2>Personal </h2>
        {userDetails && userDetails.DETAILS && (
          <div className="contact-info">
            <p>Email: {userDetails?.DETAILS?.email}</p>

            <p>Location:{userDetails?.ADDRESS[0]?.city}</p>

            <p>Phone: {userDetails?.DETAILS?.phone}</p>

            <p>
              GitHub:{" "}
              <a
                href={userDetails?.PROFESIONALLINKS[0]?.url || ""}
                target="_blank"
              >
                {userDetails?.PROFESIONALLINKS[0]?.url}
              </a>
            </p>
          </div>
        )}
      </div>

      <div className="section">
        <h2>Work Experience</h2>
        <div className="work-experience">
          {userDetails &&
            userDetails.EXPERIENCE.length > 0 &&
            userDetails.EXPERIENCE.map(
              (ele) => {
                return (
                  <div className="job" key={ele.id}>
                    <h3>
                      {ele?.title} at {ele?.company}
                    </h3>
                    <p>
                      {moment(ele?.start_date).format("DD MM YYYY")} - {moment(ele?.end_date).format("DD MM YYYY")}
                    </p>
                  </div>
                );
              }
            )}
        </div>
      </div>

      <div className="section">
        <h2>Education</h2>
        <div className="education">
          {userDetails &&
            userDetails.EDUCATION.length > 0 &&
            userDetails?.EDUCATION?.map(
              (ele) => {
                return (
                  <div className="education-item" key={ele.id} >
                    <h3>
                      {ele?.degree} at {ele?.institute}
                    </h3>
                    <p>
                      {moment(ele.start_date).format("DD-MM-YYYY")} -{" "}
                      {moment(ele?.end_date).format("DD-MM-YYYY")}
                    </p>
                  </div>
                );
              }
            )}
        </div>
      </div>

      <div className="section">
        <h2>Projects</h2>
        <div className="projects">
          {userDetails &&
            userDetails.PROJECTS.length > 0 &&
            userDetails.PROJECTS.map(
              (ele) => {
                return (
                  <div className="project" key={ele.id}>
                    <h3> {ele?.title} </h3>
                    <p>{ele?.description}</p>
                  </div>
                );
              }
            )}
        </div>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <div className="skills">
          {userDetails &&
            userDetails.SKILLS.length > 0 &&
            userDetails.SKILLS.map(
              (ele) => {
                return (
                  <div className="skill" key={ele.id} >
                    <h3>{ele?.title}</h3>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
