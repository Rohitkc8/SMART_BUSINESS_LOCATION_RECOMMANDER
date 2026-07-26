import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Home_page() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar />

      <section className="hero">
        <h1>Smart Business Location Recommender</h1>

        <p>
          Find the best location to start your business using Artificial
          Intelligence and data-driven analysis.
        </p>

        <button onClick={() =>navigate("/analyze")} >Start Analysis</button>
      </section>

      <section className="features">
        <h2>Our Features</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>📍 Location Analysis</h3>
            <p>
              Analyze any location based on population, traffic, nearby
              businesses, and customer demand.
            </p>
          </div>

          <div className="feature-card">
            <h3>🤖 AI Recommendation</h3>
            <p>
              Our AI model recommends the most profitable business based on
              location data and market trends.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Reports & Insights</h3>
            <p>
              View detailed prediction reports, charts, and business insights
              to support informed decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Why Choose Our System?</h2>

        <p>
          Our Smart Business Location Recommender uses Artificial Intelligence
          and data analytics to help entrepreneurs identify the most suitable
          business locations. By evaluating population density, competition,
          accessibility, and market demand, the system provides accurate
          recommendations that reduce business risk and improve the chances of
          success.
        </p>
      </section>

     <Footer/>
    </div>
  );
}

export default Home_page;