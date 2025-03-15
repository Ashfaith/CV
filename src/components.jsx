import { useState } from "react";

function TextEditor({ placeHolder, index }) {
  const [input, setInput] = useState({ inputText: `${placeHolder}` });
  const handleInputChange = (e) => {
    const newInput = { ...input, inputText: e.target.value };
    setInput(newInput);
  };

  const [buttonType, setButtonType] = useState("Edit");
  const handleButtonChange = () => {
    setButtonType((prevType) => (prevType === "Submit" ? "Edit" : "Submit"));
    setElementType(() => setElementType(!isInput));
  };

  const [isInput, setElementType] = useState(false);

  return (
    <>
      {isInput ? (
        <textarea
          key={placeHolder}
          type="text"
          onChange={handleInputChange}
          value={input.inputText}
          className="input-text"
        ></textarea>
      ) : (
        <div className="text">{input.inputText}</div>
      )}
      <button key={index} type="button" onClick={handleButtonChange}>
        {buttonType}
      </button>
    </>
  );
}

export default TextEditor;
