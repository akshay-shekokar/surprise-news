import BoxContainer from "./components/BoxContainer/BoxContainer";
import "./App.css";
import { useState } from "react";
// import ResultContainer from "./components/ResultContainer/ResultContainer";
import ResultVideo from "./components/ResultVideo/ResultVideo";

function App() {
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const showResult = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
      setIsResultDisplayed(true);
    }, 2000);
  };

  return (
    <>
      <div className="body-container">
        {isResultDisplayed ? (
          // <ResultContainer />
          <ResultVideo />
        ) : (
          <BoxContainer onFinalClick={showResult} />
        )}
        {showOverlay && <div className="overlay">
          <div class="loader"></div>
        </div>}
      </div>
    </>
  );
}

export default App;
