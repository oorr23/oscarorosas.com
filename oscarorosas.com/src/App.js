import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./components/pages/Home";
import CounterSlice from "./components/pages/counterComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterSlice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
