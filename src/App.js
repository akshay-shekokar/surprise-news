import BoxContainer from "./components/BoxContainer/BoxContainer";
import "./App.css";
import { useState } from "react";
import ResultContainer from "./components/ResultContainer/ResultContainer";

function App() {
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);
  const showResult = () => {
    setTimeout(() => {
      setIsResultDisplayed(true);
    }, 2000);
  };

  return (
    <>
      <div className="body-container">
        {isResultDisplayed ? (
          <ResultContainer />
        ) : (
          <BoxContainer onFinalClick={showResult} />
        )}
      </div>
    </>
  );
}

export default App;
