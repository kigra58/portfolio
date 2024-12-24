import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import { getAddress, getBasicDetails, getEducation, getProfesionalLinks, getProfestionDetails, getProfile, getProfileImage, getProjectDetails, getSkills, getSummary } from '../services/userService';
// import useApiCall from '../hooks/useApiCall';



interface IUserData{
    [key:string]:unknown[]
}

const Profile:React.FC = () => {
  const [userDetails,setUserDetails]=useState<IUserData>();
  const params=useParams() as{ id:string};
  console.log(params?.id);

//   const { loading, data, error } = useApiCall(getProfileService,true);
  
//  if(loading){
//     return <p> Loading... </p>
//  }

//  if(error){
//     <p> {error?.message} </p>
//  }

//  console.log("datadatadatadata",data);
  const gettingUserDetails=async(userId:string)=>{
  
    const response=await Promise.all([
        getBasicDetails(userId),
        getProfileImage(userId),
        getProfile(userId),
        getAddress(userId),
        getProfestionDetails(userId),
        getProfesionalLinks(userId),
        getEducation(userId),
        getSummary(userId),
        getProjectDetails(userId),
        getSkills(userId)
    ]);

    const temp:IUserData={};
    
    for(const item of response){
      if(!temp[item.config.url]){
        temp[item.config.url]=item.data;
      }
      temp[item.config.url]=Object.values({...item.data});
    };
    setUserDetails(temp)

  }
  
  useEffect(()=>{    
   gettingUserDetails("1");
  },[]);


  console.log("userDetailsuserDetailsuserDetails",userDetails);


  return (
    <div className="container">
    <div className="header">
        <img src="profile.jpg" alt="Profile Image" className="profile-image" />
        <h1>Your Name</h1>
        <p>Software Engineer</p>
        <button className="button"
    
        
        id="theme-toggle">Toggle Theme</button>
    </div>

    <div className="section">
        <h2>Work Experience</h2>
        <div className="work-experience">
            <div className="job">
                <h3>Software Engineer at Tech Company</h3>
                <p>Jan 2020 - Present</p>
                <p>Worked on developing and maintaining web applications using modern frameworks and technologies.</p>
            </div>
            <div className="job">
                <h3>Junior Developer at Startup</h3>
                <p>Jun 2018 - Dec 2019</p>
                <p>Assisted in the development of mobile applications and contributed to backend services.</p>
            </div>
        </div>
    </div>

    <div className="section">
        <h2>Education</h2>
        <div className="education">
            <div className="education-item">
                <h3>Bachelor of Science in Computer Science</h3>
                <p>University of Technology</p>
                <p>2014 - 2018</p>
            </div>
            <div className="education-item">
                <h3>High School Diploma</h3>
                <p>High School Name</p>
                <p>2010 - 2014</p>
            </div>
        </div>
    </div>

    <div className="section">
        <h2>Personal Info</h2>
        <div className="contact-info">
            <p>Email: {userDetails[]}</p>
            <p>Location: Your Current Location</p>
            <p>Phone: Your Phone Number</p>
            <p>GitHub: <a href="https://github.com/yourprofile" target="_blank">yourprofile</a></p>
        </div>
    </div>

    <div className="section">
        <h2>Projects</h2>
        <div className="projects">
            <div className="project">
                <h3>Project One</h3>
                <p>A brief description of the project and the technologies used.</p>
            </div>
            <div className="project">
                <h3>Project Two</h3>
                <p>A brief description of the project and the technologies used.</p>
            </div>
        </div>
    </div>

    <div className="section">
        <h2>Skills</h2>
        <div className="skills">
            <div className="skill">
                <h3>JavaScript</h3>
                <p>Proficient in modern JavaScript frameworks and libraries.</p>
            </div>
            <div className="skill">
                <h3>Python</h3>
                <p>Experienced in building backend services and automation scripts.</p>
            </div>
            <div className="skill">
                <h3>React</h3>
                <p>Skilled in building dynamic and responsive web applications.</p>
            </div>
            <div className="skill">
                <h3>Node.js</h3>
                <p>Knowledgeable in building scalable server-side applications.</p>
            </div>
        </div>
    </div>

    <div className="section">
        <h2>Contact Us</h2>
        <p>If you would like to get in touch, please reach out via email or phone.</p>
    </div>
</div>
  )
}

export default Profile