import React from "react";
import InputField from "../components/InputField";
import { useForm } from "react-hook-form";

const ContactUs: React.FC = () => {
  const { control } = useForm();
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
                control={control}
              />
              <InputField
                type="text"
                name="name"
                placeholder="Email"
                required
                value=""
                control={control}
              />
              <InputField
                type="text"
                name="name"
                placeholder="Description"
                required
                value=""
                control={control}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
