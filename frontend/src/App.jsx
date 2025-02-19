import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RidesList from "./pages/RidesList";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<RidesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
