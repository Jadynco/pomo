import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Pomodoro from "./pomodoro";
import Timer from "./timer";
import Stopwatch from "./stopwatch";

function App() {
  return (
    <Router>
      <div className="logo">Pomodoro</div>
      <div className="App">
        <nav className= "navbar">
          <Link to="/pomodoro">Pomodoro</Link>
          <Link to="/timer">Timer</Link>
          <Link to="/stopwatch">Stopwatch</Link>
        </nav>

        <Routes>
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
