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
      <div>
        {isInput ? (
          <input
            key={placeHolder}
            type="text"
            onChange={handleInputChange}
            value={input.inputText}
          ></input>
        ) : (
          <div>{input.inputText}</div>
        )}
      </div>
      <button key={index} type="button" onClick={handleButtonChange}>
        {buttonType}
      </button>
    </>
  );
}

export default TextEditor;
