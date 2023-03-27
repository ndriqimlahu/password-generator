import { useState } from "react";

import "./App.css";
import Card from "./components/UI/Card";
import PasswordResult from "./components/Tool/PasswordResult";
import PasswordLength from "./components/Tool/PasswordLength";
import PasswordSettings from "./components/Tool/PasswordSettings";
import Button from "./components/UI/Button";

function App() {
  const [enterResult, setResult] = useState("Click on the Generate button");
  const [changeLength, setLength] = useState(16);
  const [useLowercase, setLowercase] = useState(false);
  const [useUppercase, setUppercase] = useState(false);
  const [useNumber, setNumber] = useState(false);
  const [useSymbol, setSymbol] = useState(false);
  const [checkboxesChecked, setCheckboxesChecked] = useState(false);

  return (
    <Card>
      <PasswordResult result={enterResult} />
      <PasswordLength length={changeLength} />
      <PasswordSettings
        lowercase={useLowercase}
        uppercase={useUppercase}
        number={useNumber}
        symbol={useSymbol}
      />
      <Button handleCheckboxes={checkboxesChecked} />
    </Card>
  );
}

export default App;
