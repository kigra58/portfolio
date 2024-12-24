import React from "react";
import InputField from "../components/InputField";

const ContactUs: React.FC = () => {
  return (
    <div className="container">
      <div className="section">
        <h2>Contact Us</h2>
        <div className="projects">
          <div className="project">
            <div className="project-input-group">
              <InputField
                type="text"
                name="name"
                placeholder="Name"
                required
                value=""
              />
              <InputField
                type="text"
                name="name"
                placeholder="Email"
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
    </div>
  );
};

export default ContactUs;
