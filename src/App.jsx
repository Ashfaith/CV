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
          <div key={index} id={exp.section}>
            <TextEditor
              section={exp.section}
              index={index}
              placeHolder={exp.placeHolder}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
