import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./Components/LandingPage";
import Todo from "./Components/Todo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
    
  );
}

export default App;
