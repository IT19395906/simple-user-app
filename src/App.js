import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./home";
import AddUser from "./adduser";
import UpdateUser from "./updateuser";
import GetUser from "./getuser";

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/add" element={<AddUser/>}/>
        <Route exact path="/update/:id" element={<UpdateUser/>}/>
        <Route exact path="/get/:id" element={<GetUser/>}/>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
