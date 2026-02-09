import React, { useState, useMemo, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

/* ---------------- CATEGORIES ---------------- */
const categories = [
  { name: "Hospitals", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3" },
  { name: "Clinics", img: "https://images.unsplash.com/photo-1580281657527-47a0c9e8e0e7" },
  { name: "Dental Clinics", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95" },
  { name: "Eye Hospitals", img: "https://images.unsplash.com/photo-1581595219315-a187dd40c322" },
  { name: "Diagnostic Centers", img: "https://images.unsplash.com/photo-1581093458791-9d09f5b2a7c4" },
  { name: "Pathology Labs", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67" },
  { name: "Pharmacies", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88" },
  { name: "Physiotherapy Centers", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67" },
];

/* ---------------- REALISTIC NAMES ---------------- */
const namePool: Record<string, string[]> = {
  Hospitals: [
    "City Care Hospital",
    "Green Valley Hospital",
    "Sunrise Multispeciality",
    "Metro Heart Institute",
    "LifeLine Hospital",
  ],
  Clinics: [
    "Family Health Clinic",
    "Urban Care Clinic",
    "Wellness Clinic",
    "Prime Care Clinic",
    "Community Clinic",
  ],
  "Dental Clinics": [
    "Smile Dental Care",
    "Bright Tooth Clinic",
    "Happy Smiles Dental",
    "Perfect Teeth",
    "Advanced Dental Studio",
  ],
  "Eye Hospitals": [
    "Vision Eye Hospital",
    "Clear Sight Center",
    "Netra Care",
    "Focus Eye Institute",
    "Drishti Eye Hospital",
  ],
  "Diagnostic Centers": [
    "Accurate Diagnostics",
    "HealthScan Center",
    "Precision Labs",
    "Advance Imaging",
    "Trust Diagnostics",
  ],
  "Pathology Labs": [
    "Modern Path Lab",
    "Care Pathology",
    "Rapid Test Lab",
    "Prime Path Lab",
    "Reliable Diagnostics",
  ],
  Pharmacies: [
    "MedPlus Pharmacy",
    "Apollo Pharmacy",
    "WellMed Store",
    "City Medical",
    "Good Health Pharmacy",
  ],
  "Physiotherapy Centers": [
    "Active Life Physio",
    "Pain Relief Physio",
    "MoveWell Center",
    "Flex Physiotherapy",
    "Revive Rehab",
  ],
};

/* ---------------- CREATE DATA ---------------- */
const createBusinesses = () => {
  const list: {
    id: string;
    name: string;
    category: string;
    img: string;
    rating: number;
    homeVisit: boolean;
    isOpen: boolean;
  }[] = [];

  categories.forEach((cat) => {
    namePool[cat.name].forEach((name, i) => {
      list.push({
        id: `${cat.name}-${i}`,
        name,
        category: cat.name,
        img: cat.img,
        rating: Number((Math.random() * 2 + 3).toFixed(1)),
        homeVisit: Math.random() > 0.6,
        isOpen: Math.random() > 0.5,
      });
    });
  });

  return list;
};

export default function HealthcareDirectory() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  /* FILTERS */
 const [showOpen, setShowOpen] = useState(true);
  const [homeOnly, setHomeOnly] = useState(false);

  const allBusinesses = useMemo(() => createBusinesses(), []);

  /* SCROLL REFS */
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scroll = (category: string, direction: "left" | "right") => {
    const el = scrollRefs.current[category];
    if (!el) return;

    const amount = 300;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  /* ---------------- FILTER ---------------- */
  const filtered = useMemo(() => {
    return allBusinesses.filter((b) => {
      const matchCategory =
        activeCategory === "All" || b.category === activeCategory;

      const matchSearch = b.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchOpen = showOpen ? b.isOpen : !b.isOpen;

      const matchHome = homeOnly ? b.homeVisit : true;

      return matchCategory && matchSearch && matchOpen && matchHome;
    });
  }, [activeCategory, search, showOpen, homeOnly, allBusinesses]);


  return (
    <React.Fragment>
      <style>{`
        body {
          background: #f8fafc;
          font-family: Inter, system-ui, sans-serif;
        }

        .scroll-row {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .scroll-row::-webkit-scrollbar { display: none; }

        .health-card {
  min-width: 420px;   /* wider for side layout */
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,.08);
  flex-shrink: 0;
  display: flex;      /* IMPORTANT */
}

.health-card img {
  width: 160px;       /* fixed image width */
  height: auto;
  object-fit: cover;
}


        .badge-home {
          position: absolute;
          top: 10px;
          left: 10px;
          background: linear-gradient(45deg, #16a34a, #22c55e);
          color: white;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 20px;
          font-weight: 600;
        }

        .cat-btn { white-space: nowrap; }
      `}</style>
     {/* ================= HEADER ================= */}
      <div className="border-bottom bg-white">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center gap-2">
            <img
              src="/src/assets/qr.png"
              alt="logo"
              width="28"
            />
            <h5 className="mb-0 fw-bold text-primary">GWT-QR</h5>
          </div>

          <button className="btn btn-outline-primary px-4">Login</button>
        </div>

        <div className="container py-2">
          <span className="text-muted">Home</span>
          <span className="mx-2">{">"}</span>
          <span className="fw-semibold">Healthcare</span>
        </div>
      </div>
      {/* ================= END HEADER ================= */}
      {/* ================= TOP FILTER BAR ================= */}
<div className="bg-white border-bottom">
  <div className="container py-3">

    {/* Title */}
    <h2 className="fw-bold mb-3">Local Clinics</h2>

    {/* Filters Row */}
    <div className="d-flex flex-wrap align-items-center gap-2">

      {/* Search */}
      <div className="input-group" style={{ maxWidth: 320 }}>
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input
          className="form-control"
          placeholder="Search local clinics near you"
        />
      </div>

      {/* Location */}
      <button className="btn btn-light border">
        Location <i className="bi bi-chevron-down ms-1"></i>
      </button>

      {/* Rating */}
      <button className="btn btn-light border">
        Rating <i className="bi bi-chevron-down ms-1"></i>
      </button>

      {/* Filters */}
      <button className="btn btn-light border">
        <i className="bi bi-sliders me-1"></i>
        Filters
      </button>

      {/* Open Now */}
      <div className="form-check form-switch ms-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="openNowTop"
        />
        <label className="form-check-label" htmlFor="openNowTop">
          Open Now
        </label>
      </div>

      {/* Clear */}
      <button className="btn btn-outline-primary ms-auto">
        Clear All
      </button>
    </div>
  </div>
</div>
{/* ================= END TOP FILTER BAR ================= */}

      <div className="container my-4">
        {/* SEARCH */}
        
        {/* CATEGORY BUTTONS */}
        <div className="d-flex gap-2 overflow-auto mb-3">
          <button
            className={`btn cat-btn ${
              activeCategory === "All" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>

          {categories.map((c) => (


            <button
              key={c.name}
              className={`btn cat-btn ${
                activeCategory === c.name
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setActiveCategory(c.name)}
            >
              {c.name}
            </button>
          ))}
        </div>

{/* FILTER SWITCHES */}
<div className="mb-3 d-flex gap-3 align-items-center">
  {/* Open/Closed Switch */}
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      checked={showOpen}
      onChange={(e) => setShowOpen(e.target.checked)}
      id="openCheck"
    />
    <label className="form-check-label" htmlFor="openCheck">
      {showOpen ? "Open" : "Closed"}
    </label>
  </div>

  {/* Home Visit Switch */}
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      checked={homeOnly}
      onChange={(e) => setHomeOnly(e.target.checked)}
      id="homeVisitCheck"
    />
    <label className="form-check-label" htmlFor="homeVisitCheck">
      Home Visit
    </label>
  </div>
</div>

        {/* ROWS */}
        {categories
          .filter(
            (c) => activeCategory === "All" || c.name === activeCategory
          )
          .map((cat) => {
            const businesses = filtered.filter(
              (b) => b.category === cat.name
            );

            if (businesses.length === 0) return null;

            return (
              <div key={cat.name} className="mb-5">
                {/* TITLE + ARROWS */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-bold m-0">{cat.name}</h5>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => scroll(cat.name, "left")}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>

                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => scroll(cat.name, "right")}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>

                {/* CARDS */}
                <div
  className="scroll-row"
  ref={(el) => {
    scrollRefs.current[cat.name] = el;
  }}
>

                  {businesses.map((b) => (
                    <div key={b.id} className="health-card position-relative">
  {b.homeVisit && (
    <div className="badge-home">
      <i className="bi bi-house-door me-1"></i>
      Home Visit
    </div>
  )}

  <img
    src={`${b.img}?auto=format&fit=crop&w=800&q=80`}
    alt={b.name}
  />

  {/* RIGHT SIDE */}
  <div className="p-3 d-flex flex-column flex-grow-1">
  {/* NAME */}
  <h5 className="fw-bold mb-1">{b.name}</h5>

  {/* RATING */}
  <div className="d-flex align-items-center gap-2 mb-1">
    <span className="text-warning">⭐⭐⭐⭐⭐</span>
    <span className="fw-semibold">{b.rating}</span>
    <small className="text-muted">(105 reviews)</small>
  </div>

  {/* ADDRESS */}
  <div className="text-muted mb-1">
    <i className="bi bi-geo-alt-fill me-1"></i>
    123 Main Street, Delhi
  </div>

  {/* OPEN STATUS */}
  <div className={`${b.isOpen ? "text-success" : "text-danger"} mb-2`}>
    <i className="bi bi-check-circle-fill me-1"></i>
    {b.isOpen ? "Open Now · Closes at 8:00 PM" : "Closed"}
  </div>

  {/* BOTTOM AREA */}
<div className="d-flex align-items-center justify-content-between mt-auto">
  {/* SERVICES */}
  <div className="d-flex flex-wrap gap-2">
    <span className="badge bg-light text-primary border">
      General Consultation
    </span>
    <span className="badge bg-light text-dark border">₹500</span>
    <span className="badge bg-light text-primary border">
      Blood Tests
    </span>
    <span className="badge bg-light text-primary border">
      Vaccinations
    </span>
  </div>

  {/* CALL BUTTON */}
  <button className="btn btn-light border d-flex align-items-center gap-2">
    <i className="bi bi-telephone"></i>
    Call
  </button>
</div>
  </div>
                    </div>
                  ))}
                </div>
              </div>
            );
                    })}
      </div>   {/* <-- close container */}
    </React.Fragment>
  );
}
