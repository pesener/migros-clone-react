import Navbar from "./Screens/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="py-10">
        <div></div>
      </main>
    </Router>
  );
}

export default App;
