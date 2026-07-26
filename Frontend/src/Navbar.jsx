import { useNavigate } from "react-router-dom";
import Home_page from "./Home_page";
function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <h1>SITE SURVEY</h1>

      <ul>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/analyze")}>Analyze</button>
        <button onClick={() => navigate("/report")}>Report</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </ul>
    </nav>
  );
}

export default Navbar;