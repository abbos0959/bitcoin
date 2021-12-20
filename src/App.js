
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Card} from "./component/card"
import { In } from './component/in';
import "./component/sytle.css"
import { Pro } from './pro';
import { About } from "./about"
import  Sin  from "./sin"

function App() {
  return (
    <div className="App">
      <Card/>
      <In></In>
      <Pro></Pro>
      <Sin/>
      <About/>
   
    </div>
  );
}

export default App;
