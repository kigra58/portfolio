import React from "react";
import InputField from "../components/InputField";
import ProfileImage from "../assets/profile-image.avif"

const NewPortfolio: React.FC = () => {
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
              name="name"
              placeholder="First Name"
              required
              value=""
            />

            <InputField
              type="text"
              name="name"
              placeholder="Last Name"
              required
              value=""
            />
            <InputField
              type="text"
              name="name"
              placeholder="Profile"
              required
              value=""
            />

            <InputField
              type="text"
              name="name"
              placeholder="Email Address"
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
              placeholder="Phone"
              required
              value=""
            />

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
            <InputField
              type="text"
              name="name"
              placeholder="Skills"
              required
              value=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPortfolio;
