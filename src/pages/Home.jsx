import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import { menuItems } from "../data/menuItems";

function Home() {
    const bestSellers = menuItems.slice(0, 4);
  return (
    <>
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

    <section className="container py-5">
        <h2 className="text-center mb-4">Our Best Sellers</h2>
        <div className="row g-4">
          {bestSellers.map((item) => (
            <div className="col-12 col-sm-6 col-lg-3" key={item.id}>
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <div style={{ fontSize: "3rem" }}>{item.emoji}</div>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="fw-bold">₹{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </>
  );
}

export default Home;