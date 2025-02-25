import { useState, useEffect } from "react";
const fleetData = [
  {
    id: 1,
    type: "SUV",
    name: "Luxury SUV",
    price: "$100/day",
    img: "https://i.pinimg.com/736x/fc/b3/56/fcb356d159695269b22791af7a48541b.jpg",
  },
  {
    id: 2,
    type: "Sedan",
    name: "Executive Sedan",
    price: "$80/day",
    img: "https://i.pinimg.com/736x/83/c4/db/83c4db024030eadb758913a0c68fd8e6.jpg",
  },
  {
    id: 3,
    type: "Sports",
    name: "Sports Coupe",
    price: "$150/day",
    img: "https://i.pinimg.com/736x/5a/e8/d6/5ae8d6218c3c6a9296936347fc2c2eef.jpg",
  },
  {
    id: 4,
    type: "SUV",
    name: "Compact SUV",
    price: "$90/day",
    img: "https://i.pinimg.com/736x/ef/01/47/ef01475f1ee30ed9287906efdf2a5358.jpg",
  },
  {
    id: 5,
    type: "Luxury",
    name: "Premium Luxury",
    price: "$200/day",
    img: "https://i.pinimg.com/736x/15/91/aa/1591aa65869a5ee3e4e4c2207d29ae66.jpg",
  },
];
const category = ["All", "Luxury", "Economic", "SUV", "Sports"];
function Fleet() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredCars, setFilteredCars] = useState(fleetData);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const filtered =
      activeFilter === "All"
        ? fleetData
        : fleetData.filter((car) => car.type === activeFilter);
    setFilteredCars(filtered);
    setActiveIndex(0);
  }, [activeFilter]);
  const carsPerPage = 3;
  const totalSlides = Math.max(1, Math.ceil(filteredCars.length / carsPerPage));
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);
  return (
    <>
      <div className="Fleet-section">
        <h2>
          Our Vehicle <span>Fleet</span>
        </h2>
        <div className="filters">
          {category.map((type) => (
            <button
              key={type}
              className={`filter-btn ${activeFilter === type ? "active" : ""}`}
              onClick={() => setActiveFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="carousel">
          {filteredCars
            .slice(activeIndex * carsPerPage, (activeIndex + 1) * carsPerPage)
            .map((car) => (
              <div key={car.id} className="car-card">
                <img src={car.img} alt={car.name} />
                <h3>{car.name}</h3>
                <p className="price">{car.price}</p>
                <button
                  className="select-btn"
                  onClick={() => (window.location.href = "#book-me")}
                >
                  Select
                </button>
              </div>
            ))}
        </div>
        <div className="carousel-dots">
          {[...Array(totalSlides)].map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
export default Fleet;