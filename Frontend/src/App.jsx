import { Routes, Route } from "react-router-dom";
import Home_page from "./Home_page.jsx";
import Analyze from "./Analyze.jsx";
import Report from "./Report.jsx";
import Contact from "./Contact.jsx";
import Login from "./Login.jsx";
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/report" element={<Report />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;