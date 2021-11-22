import "./App.css";
import Input from "./components/Input";
import OptionsDropdown from "./components/OptionsDropdown";
import { useRef, useEffect, useState } from "react";

function App() {
  const optionsElement = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState("none");
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   if (optionsElement.current) {
  //     // optionsElement.current.style = { display: "" };
  //   }
  // }, [isShowOptions]);

  function handleChange(e) {
    setValue(e.target.value);
    setIsShowOptions("");
  }

  return (
    <div className="App">
      <Input value={value} onChange={handleChange} />

      <div style={{ display: isShowOptions }}>
        <OptionsDropdown query={value} />
      </div>
      <button
        onClick={() => {
          console.log("tes");
          setIsShowOptions("none");
        }}
      >
        test
      </button>
    </div>
  );
}

export default App;
