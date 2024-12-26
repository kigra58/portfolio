import React, { useEffect } from "react";
import InputField from "../components/InputField";
import ProfileImage from "../assets/profile-image.avif";
import { useFieldArray, useForm } from "react-hook-form";

const NewPortfolio: React.FC = () => {
  const { control } = useForm({
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const {
    fields: workExperienceFields,
    insert: insertWorkExperienceFields,
    append: appendWorkExperienceFields,
    remove: removeWorkExperienceFields,
  } = useFieldArray({
    name: "workExperience",
    control,
  });

  const {
    fields: educationFields,
    insert: insertEducationFields,
    append: appendEducationFields,
    remove: removeEducationFields,
  } = useFieldArray({
    name: "education",
    control,
  });
  const {
    fields: skillsFields,
    insert: insertSkillsFields,
    append: appendSkillsFields,
    remove: removeSkillsFields,
  } = useFieldArray({
    name: "skills",
    control,
  });

  const {
    fields: projectsFields,
    insert: insertProjectsFields,
    append: appendProjectsFields,
    remove: removeProjectsFields,
  } = useFieldArray({
    name: "projects",
    control,
  });
  const {
    fields: profesionalLinksFields,
    insert: insertprofesionalLinksFields,
    append: appendProfesionalLinksFields,
    remove: removeProfesionalLinksFields,
  } = useFieldArray({
    name: "profesionalLinks",
    control,
  });

  useEffect(() => {
    insertWorkExperienceFields(0, "");
    insertEducationFields(0, "");
    insertprofesionalLinksFields(0, "");
    insertSkillsFields(0, "");
    insertProjectsFields(0, "");
  }, []);

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
                required
                value=""
                control={control}
              />

              <InputField
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value=""
                control={control}
              />
              <InputField
                type="text"
                name="profile"
                placeholder="Profile"
                required
                value=""
                control={control}
              />

              <InputField
                type="text"
                name="email"
                placeholder="Email Address"
                required
                value=""
                control={control}
              />

              <InputField
                type="text"
                name="location"
                placeholder="Location"
                required
                value=""
                control={control}
              />

              <InputField
                type="text"
                name="phone"
                placeholder="Phone"
                required
                value=""
                control={control}
              />

              <InputField
                type="text"
                name="title"
                placeholder="Title"
                required
                value=""
                control={control}
              />

              {profesionalLinksFields.map((_, index) => {
                return (
                  <>
                    <InputField
                      type="text"
                      name={`workExperience${[index]}["title]`}
                      placeholder="URL"
                      required
                      value=""
                      control={control}
                    />
                    <InputField
                      type="text"
                      name={`workExperience${[index]}["url]`}
                      placeholder="URL"
                      required
                      value=""
                      control={control}
                    />
                  </>
                );
              })}
            </div>
            <button
                type="button"
                className="fancy-button"
                onClick={() => {
                  appendProfesionalLinksFields({
                    title: undefined,
                    company: undefined,
                    location: undefined,
                    startDate: undefined,
                    endDate: undefined,
                  });
                }}
              >
                {" "}
                Add New
              </button>
              <button
                type="button"
                className="fancy-button"
                onClick={() => {
                  removeProfesionalLinksFields();
                }}
              >
                {" "}
                REMOVE
              </button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Work Experience</h2>
        <div className="work-experience">
          <div className="job">
            <div className="work-experience-input-group">
              {workExperienceFields.map((_, index) => {
                return (
                  <>
                    <InputField
                      type="text"
                      name={`workExperience${[index]}["title]`}
                      placeholder="Title"
                      required
                      value=""
                      control={control}
                    />
                    <InputField
                      type="text"
                      name={`workExperience${[index]}["company]`}
                      placeholder="Company"
                      required
                      value=""
                      control={control}
                    />
                    <InputField
                      type="text"
                      name={`workExperience${[index]}["location]`}
                      placeholder="Location"
                      required
                      value=""
                      control={control}
                    />

                    <InputField
                      type="text"
                      name={`workExperience${[index]}["startDate]`}
                      required
                      value=""
                      control={control}
                    />

                    <InputField
                      type="text"
                      name={`workExperience${[index]}["endDate]`}
                      placeholder="End Date "
                      required
                      value=""
                      control={control}
                    />
                  </>
                );
              })}
            </div>
            <button
              type="button"
              className="fancy-button"
              onClick={() => {
                appendWorkExperienceFields({
                  title: undefined,
                  company: undefined,
                  location: undefined,
                  startDate: undefined,
                  endDate: undefined,
                });
              }}
            >
              {" "}
              Add New
            </button>
            <button
              type="button"
              className="fancy-button"
              onClick={() => {
                removeWorkExperienceFields();
              }}
            >
              {" "}
              REMOVE
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Education</h2>
        <div className="education">
          <div className="education-item">
            <div className="education-input-group">
              {educationFields.map((_, index) => {
                return (
                  <>
                    <InputField
                      type="text"
                      name={`workExperience${[index]}["course]`}
                      placeholder="Course"
                      required
                      value=""
                      control={control}
                    />

                    <InputField
                      type="text"
                      name={`workExperience${[index]}["Institute]`}
                      placeholder="Institute"
                      required
                      value=""
                      control={control}
                    />

                    <InputField
                      type="text"
                      name={`workExperience${[index]}["startDate]`}
                      placeholder="Start Date"
                      required
                      value=""
                      control={control}
                    />

                    <InputField
                      type="text"
                      name={`workExperience${[index]}["endDate]`}
                      placeholder="End Date"
                      required
                      value=""
                      control={control}
                    />
                  </>
                );
              })}
            </div>
            <button
              type="button"
              className="fancy-button"
              onClick={() => {
                appendEducationFields({
                  title: undefined,
                  company: undefined,
                  location: undefined,
                  startDate: undefined,
                  endDate: undefined,
                });
              }}
            >
              {" "}
              Add New
            </button>
            <button
              type="button"
              className="fancy-button"
              onClick={() => {
                removeEducationFields();
              }}
            >
              {" "}
              REMOVE
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project">
            <div className="project-input-group">
              {projectsFields.map((_, index) => {
                return (
                  <>
                    <InputField
                      type="text"
                      name={`skills${[index]}["title]`}
                      placeholder="Title"
                      required
                      value=""
                      control={control}
                    />
                    <InputField
                      type="text"
                      name={`skills${[index]}["description]`}
                      placeholder="Description"
                      required
                      value=""
                      control={control}
                    />
                  </>
                );
              })}
            </div>
            <button
              type="button"
              className="fancy-button"
              onClick={() => {
                appendProjectsFields({
                  title: undefined,
                  company: undefined,
                  location: undefined,
                  startDate: undefined,
                  endDate: undefined,
                });
              }}
            >
              {" "}
              Add New
            </button>
            <button
              type="button"
              className="fancy-button"
              onClick={() => {
                removeProjectsFields();
              }}
            >
              {" "}
              REMOVE
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <div className="skills">
          <div className="skill">
            <div className="project-input-group">
              {skillsFields.map((_, index) => {
                return (
                  <>
                    <InputField
                      type="text"
                      name={`skills${[index]}["title]`}
                      placeholder="Title"
                      required
                      value=""
                      control={control}
                    />
                    <InputField
                      type="text"
                      name={`skills${[index]}["level]`}
                      placeholder="Level"
                      required
                      value=""
                      control={control}
                    />
                  </>
                );
              })}
            </div>
            <button
              type="button"
              className="fancy-button"
              onClick={() => {
                appendSkillsFields({
                  title: undefined,
                  company: undefined,
                  location: undefined,
                  startDate: undefined,
                  endDate: undefined,
                });
              }}
            >
              {" "}
              Add New
            </button>
            <button
              type="button"
              className="fancy-button"
              onClick={() => {
                removeSkillsFields();
              }}
            >
              {" "}
              REMOVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPortfolio;
