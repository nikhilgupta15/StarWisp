import "./App.css";
import Notepad from "./components/notepad";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPost from "./components/addPost";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Notepad}></Route>
        <Route exact path="/post" component={AddPost}></Route>
      </Router>
    </div>
  );
}

export default App;
