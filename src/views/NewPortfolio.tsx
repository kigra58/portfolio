import React from "react";
import InputField from "../components/InputField";
import ProfileImage from "../assets/profile-image.avif"
import useForm from "../hooks/useForm";

const NewPortfolio: React.FC = () => {
  
  const {formData,setFormData,onChangeHandler}=useForm({
    personal:{
      fiestName: "",
      lastName: "",
      profile:"",
      phone: "",
      email:""
    },
    address:[{
      city: "",
      state: "",
      zip: "",
    }],
    workExperience:[ {
      company: "",
      position: "",
      duration: "",
      // achievements: "",
    }],
    education: [{
      institution: "",
      degree: "",
      duration: "",
    }],
    projects:[{
      title: "",
      description: "",
      url: "",
      technology: "",
    }],
    skills:[{
       title:"",
       level:""
    }]

  })

  return (
    <div className="container">
      <div className="header">
        <img src={ProfileImage} alt="Profile Image" className="profile-image" />
      </div>

      <div className="section">
        <h2>Personal</h2>
        <div className="skills">
          <div className="skill">
            <div className="personal-input-group">
            <InputField
              type="text"
              name="firtName"
              placeholder="First Name"
              onChange={(e)=>onChangeHandler(e)}
              required
              value={formData?.name as string}
            />

            <InputField
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData?.name as string}
            />
            <InputField
              type="text"
              name="profile"
              placeholder="Profile"
              required
              value=""
            />

            <InputField
              type="text"
              name="email"
              placeholder="Email Address"
              required
              value=""
            />

            <InputField
              type="text"
              name="location"
              placeholder="Location"
              required
              value=""
            />

            <InputField
              type="text"
              name="phone"
              placeholder="Phone"
              required
              value=""
            />

            <InputField
              type="text"
              name="title"
              placeholder="Title"
              required
              value=""
            />

            <InputField
              type="text"
              name="url"
              placeholder="URL"
              required
              value=""
            />
             </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Work Experience</h2>
        <div className="work-experience">
          <div className="job">
            <div className="work-experience-input-group">
            {
              (formData?.workExperience as []).map((ele)=>{
                return (
                  <>
                  <InputField
                    type="text"
                    name="name"
                    placeholder="Title"
                    required
                    value=""
                  />
                  <InputField
                    type="text"
                    name="name"
                    placeholder="Company"
                    required
                    value=""
                  />
                  <InputField
                    type="text"
                    name="name"
                    placeholder="Location"
                    required
                    value=""
                  />
    
                  <InputField
                    type="text"
                    name="name"
                    placeholder="Start Date"
                    required
                    value=""
                  />
    
                  <InputField
                    type="text"
                    name="name"
                    placeholder="End Date "
                    required
                    value=""
                  />
                  
                  </>
                )
              })
            }
                

            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Education</h2>
        <div className="education">
          <div className="education-item">
            <div className="education-input-group">
              <InputField
                type="text"
                name="name"
                placeholder="Course"
                required
                value=""
              />

              <InputField
                type="text"
                name="name"
                placeholder="Institute"
                required
                value=""
              />

              <InputField
                type="text"
                name="name"
                placeholder="Start Date"
                required
                value=""
              />

              <InputField
                type="text"
                name="name"
                placeholder="End Date"
                required
                value=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project">
            <div className="project-input-group">
              <InputField
                type="text"
                name="name"
                placeholder="Title"
                required
                value=""
              />
              <InputField
                type="text"
                name="name"
                placeholder="Description"
                required
                value=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <div className="skills">
          <div className="skill">
            <div className="project-input-group">
            <InputField
              type="text"
              name="name"
              placeholder="Title"
              required
              value=""
            />
            <InputField
              type="text"
              name="name"
              placeholder="Level"
              required
              value=""
            />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPortfolio;
