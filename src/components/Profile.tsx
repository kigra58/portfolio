import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URLS } from "../utils/constant";
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
import moment from "moment";
// import useApiCall from '../hooks/useApiCall';

const Profile: React.FC = () => {
  const [userDetails, setUserDetails] = useState({
    DETAILS: [] as any,
    PROFILE: [] as any,
    ADDRESS: [] as any,
    IMAGE: [] as any,
    EXPERIENCE: [] as any,
    SUMMARY: [] as any,
    PROFESIONALLINKS: [] as any,
    EDUCATION: [] as any,
    PROJECTS: [] as any,
    SKILLS: [] as any,
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

    const temp: any = {};
    for (const index in Object.keys(API_URLS)) {
      if (!temp[Object.keys(API_URLS)[index]]) {
        temp[Object.keys(API_URLS)[index]] = [] as any;
      }
      temp[Object.keys(API_URLS)[index]] = response[index].data;
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
        <img src={userDetails?.IMAGE[0]?.url} alt="Profile Image" className="profile-image" />
        <h1>{userDetails?.DETAILS?.name}</h1>
        <p>{userDetails?.DETAILS?.profile}</p>
      </div>

      <div className="section">
        <h2>Personal Info</h2>
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
              (ele: {
                company: string;
                title: string;
                start_date: string;
                end_date: string;
                id:string
              }) => {
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
              (ele: {
                course: string;
                degree: string;
                institute: string;
                end_date: string;
                start_date: string;
                id:string
              }) => {
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
              (ele: { title: string; description: string;id:string}) => {
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
              (ele: { title: string; description: string ;id:string}) => {
                return (
                  <div className="skill" key={ele.id} >
                    <h3>{ele?.title}</h3>
                    <p>{ele?.description}</p>
                  </div>
                );
              }
            )}
        </div>
      </div>

      <div className="section">
        <h2>Contact Us</h2>
        <p>
          If you would like to get in touch, please reach out via email or
          phone.
        </p>
      </div>
    </div>
  );
};

export default Profile;
