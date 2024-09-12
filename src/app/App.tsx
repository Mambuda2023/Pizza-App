import Button from "../shared/UI/Button/Button";
import Input from "../shared/UI/Input/Input";

function App() {
  return (
    <>
      <Button appearance={"big"}>Отправить</Button>
      <Button appearance={"small"}>Отправить</Button>
      <Input placeholder='Email'/>
    </>
  );
}

export default App;
