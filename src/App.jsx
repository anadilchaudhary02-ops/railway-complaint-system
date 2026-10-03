import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FileComplaint from "./pages/FileComplaint"; // agla page
import Admin from "./pages/Admin";
import SubmitComplaint from "./pages/SubmitComplaint";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/file-complaint" element={<FileComplaint />} />
      <Route path="/admin" element={<Admin />} />
      <Route
          path="/submit-complaint"
          element={<SubmitComplaint />}
        />
    </Routes>
  );
}