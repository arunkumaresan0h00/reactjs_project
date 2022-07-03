import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Instagram_login from "./Instagram_login";
import Instagram_feedpage from "./Instagram_feedpage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Instagram_login />}></Route>
            <Route
              exact
              path="/sign_up"
              element={<Instagram_feedpage />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
      {/* <Instagram_feedpage/> */}

    </div>
  );
}

export default App;
