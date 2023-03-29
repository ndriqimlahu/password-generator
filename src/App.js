import { Fragment, useState } from "react";

import "./App.css";
import Header from "./components/Layout/Header";
import Card from "./components/UI/Card";
import PasswordResult from "./components/Tool/PasswordResult";
import PasswordLength from "./components/Tool/PasswordLength";
import PasswordSettings from "./components/Tool/PasswordSettings";
import Button from "./components/UI/Button";
import Footer from "./components/Layout/Footer";

function App() {
  const [enterResult, setResult] = useState("Click on the Generate button");
  const [changeLength, setLength] = useState(16);
  const [useLowercase, setLowercase] = useState(false);
  const [useUppercase, setUppercase] = useState(false);
  const [useNumber, setNumber] = useState(false);
  const [useSymbol, setSymbol] = useState(false);
  const [checkboxesChecked, setCheckboxesChecked] = useState(false);

  const generatePassword = () => {
    let characterList = "";
    let generatedPassword = "";

    if (useLowercase) {
      characterList += "abcdefghijklmnopqrstuvwxyz";
    }

    if (useUppercase) {
      characterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (useNumber) {
      characterList += "0123456789";
    }

    if (useSymbol) {
      characterList += "!@#$%^&*()_+-=[]{};:',./<>?";
    }

    for (let i = 0; i < changeLength; i++) {
      generatedPassword += characterList.charAt(
        Math.floor(Math.random() * characterList.length)
      );
    }

    if (!useLowercase && !useUppercase && !useNumber && !useSymbol) {
      setResult("Turn ON at least one setting");
      setCheckboxesChecked(false);
    } else {
      setResult(generatedPassword);
      setCheckboxesChecked(true);
    }
  };

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };

  const handleLowercaseChange = () => {
    setLowercase(!useLowercase);
  };

  const handleUppercaseChange = () => {
    setUppercase(!useUppercase);
  };

  const handleNumberChange = () => {
    setNumber(!useNumber);
  };

  const handleSymbolChange = () => {
    setSymbol(!useSymbol);
  };

  return (
    <Fragment>
      <Header />
      <Card>
        <PasswordResult result={enterResult} />
        <PasswordLength
          length={changeLength}
          handleLength={handleLengthChange}
        />
        <PasswordSettings
          lowercase={useLowercase}
          handleLowercase={handleLowercaseChange}
          uppercase={useUppercase}
          handleUppercase={handleUppercaseChange}
          number={useNumber}
          handleNumber={handleNumberChange}
          symbol={useSymbol}
          handleSymbol={handleSymbolChange}
        />
        <Button
          generate={generatePassword}
          handleCheckboxes={checkboxesChecked}
        />
      </Card>
      <Footer />
    </Fragment>
  );
}

export default App;
