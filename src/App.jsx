import TextEditor from "./components";
import "./App.css";

function App() {
  const personalInfo = [
    { section: "name", placeHolder: "Peter Griffin" },
    { section: "phone-number", placeHolder: "0085 412 789" },
    { section: "email", placeHolder: "yourcv@cvtemplate.io" },
  ];
  const experience = ["work experience", "education"];

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
          <div key={index} id={exp}>
            <TextEditor section={exp} index={index} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
