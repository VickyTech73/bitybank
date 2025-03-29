import LandingPage from "./LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
