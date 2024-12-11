import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;