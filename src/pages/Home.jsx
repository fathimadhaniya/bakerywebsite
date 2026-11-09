import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

function Home() {
  return (
    <section
      className="hero d-flex align-items-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImg})`,
      }}
    >
      <div className="container">
        <h2 className="display-4 fw-bold">Freshly Baked, Every Morning</h2>
        <p className="lead">Cakes, breads and pastries made with love.</p>
        <Link
          to="/menu"
          className="btn btn-lg"
          style={{ backgroundColor: "#c8843f", color: "#fff" }}
        >
          Order Now
        </Link>
      </div>
    </section>
  );
}

export default Home;