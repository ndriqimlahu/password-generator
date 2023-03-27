import "./App.css";
import Card from "./components/UI/Card";
import PasswordResult from "./components/Tool/PasswordResult";
import PasswordLength from "./components/Tool/PasswordLength";
import PasswordSettings from "./components/Tool/PasswordSettings";
import Button from "./components/UI/Button";

function App() {
  return (
    <Card>
      <PasswordResult />
      <PasswordLength />
      <PasswordSettings />
      <Button />
    </Card>
  );
}

export default App;
