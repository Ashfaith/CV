import TextEditor from "./components";
import "./App.css";
import { educationTemplate, workExperienceTemplate } from "./text.js";

function App() {
  const personalInfo = [
    { section: "name", placeHolder: "Peter Griffin" },
    { section: "phone-number", placeHolder: "0085 412 789" },
    { section: "email", placeHolder: "yourcv@cvtemplate.io" },
  ];
  const experience = [
    { section: "work-experience", placeHolder: workExperienceTemplate },
    { section: "education", placeHolder: educationTemplate },
  ];

  const formatSectionName = (sectionName) => {
    return sectionName
      .split("-")
      .map((word, index) => {
        return index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1)
          : word;
      })
      .join(" ");
  };

  return (
    <>
      <div className="personal">
        {personalInfo.map((info, index) => (
          <div key={index} id={info.section}>
            <TextEditor
              section={info.section}
              placeHolder={info.placeHolder}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className="experience">
        {experience.map((exp, index) => (
          <>
            <h2 className="experience-heading">
              {formatSectionName(exp.section)}
            </h2>
            <div key={index} id={exp.section}>
              <TextEditor
                section={exp.section}
                index={index}
                placeHolder={exp.placeHolder}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
