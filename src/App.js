import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./Components/LandingPage";
import Todo from "./Components/Todo";
import Doto from "./Components/Doto";
import Todos from "./Components/Todos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/doto" element={<Doto />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
    
  );
}

export default App;
