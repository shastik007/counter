// import logo from './logo.svg';
import './App.css';
import { Button } from './Component/Button/Button'
import { Count } from './Component/Count/Count'

function App() {
  return (
    <div className="App">
      <Count counter='0'/>
      <Button title='+'/>
      <Button title='-'/>
    </div>
  );
}

export default App;
