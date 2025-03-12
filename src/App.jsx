import TextEditor from "./components";
import "./App.css";

function App() {
  const personalInfo = ["name", "phone number", "email"];
  const experience = ["work experience", "education"];
  const stringToId = (string) => {
    return string
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  return (
    <>
      <div className="personal">
        {personalInfo.map((info, index) => (
          <div key={index} id={stringToId(info)}>
            <TextEditor section={info} index={index} />
          </div>
        ))}
      </div>
      <div className="experience">
        {experience.map((exp, index) => (
          <div key={index} id={stringToId(exp)}>
            <TextEditor section={exp} index={index} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
