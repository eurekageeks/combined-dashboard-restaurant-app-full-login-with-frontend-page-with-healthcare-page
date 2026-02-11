import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const HospitalDetails = () => {
  const navigate = useNavigate();
  const user = null; // Replace with actual user from context/state
  const logout = null; // Replace with actual logout function from context/state
  return (
    <div>
     <div className="border-bottom bg-white">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center gap-2">
            <img src="/src/assets/qr.png" alt="logo" width="28" />
            <h5 className="mb-0 fw-bold text-primary">GWT-QR</h5>
          </div>

         {user ? (
  <div className="d-flex align-items-center gap-3">
    <span className="fw-semibold text-primary">
      Hi, {user.name || user.email}
    </span>

    <button
      className="btn btn-danger"
      onClick={() => logout && logout()}
    >
      Logout
    </button>
  </div>
) : (
  <button
  className="btn px-4 text-white"
  style={{ backgroundColor: "#0b3d91", borderColor: "#0b3d91" }}
  onClick={() => navigate("/login")}
>
  Login
</button>
)}



        </div>
</div>
        <div className="container py-2">
          <span className="text-muted">Home</span>
          <span className="mx-2">{">"}</span>
          <span className="fw-semibold">Healthcare</span>
        </div>
      
      {/* ================= END HEADER ================= */}
    <div className="container my-4">

      {/* ================= TOP IMAGES ================= */}
      <div className="row g-3">
        <div className="col-md-8">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            className="img-fluid rounded w-100"
            style={{ height: "260px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-4">
          <div className="row g-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-6">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
                  className="img-fluid rounded"
                  style={{ height: "120px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="row mt-4">

        {/* ================= LEFT SIDE ================= */}
        <div className="col-lg-8">

          {/* About */}
          <div className="card p-3 mb-3">
            <h5>About Hospital</h5>
            <p className="text-muted mb-0">
              City Care Hospital is a leading multispeciality healthcare provider in Delhi,
              offering emergency services, diagnostics, surgeries, and outpatient
              consultations with modern equipment and experienced doctors.
            </p>
          </div>

          {/* Services */}
          <div className="card p-3 mb-3">
            <h5>Services Offered</h5>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {[
                "General Consultation",
                "Emergency",
                "ICU",
                "Surgery",
                "Blood Test",
                "Vaccination",
                "X-Ray",
                "MRI",
                "Pharmacy",
              ].map((s) => (
                <span key={s} className="badge bg-light text-dark border p-2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Doctors */}
          <div className="card p-3 mb-3">
            <div className="d-flex justify-content-between">
              <h5>Doctors</h5>
              <span className="text-primary">More</span>
            </div>

            {[
              {
                name: "Dr. Amit Sharma",
                dept: "Cardiology",
                exp: "15 years",
                fee: 800,
              },
              {
                name: "Dr. Priya Mehra",
                dept: "Orthopedics",
                exp: "12 years",
                fee: 700,
              },
              {
                name: "Dr. Rajesh Gupta",
                dept: "Pediatrics",
                exp: "10 years",
                fee: 600,
              },
            ].map((doc, i) => (
              <div key={i} className="border rounded p-2 my-2">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-3 align-items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      width="55"
                      height="55"
                      className="rounded"
                    />
                    <div>
                      <h6 className="mb-0">{doc.name}</h6>
                      <small className="text-muted">
                        {doc.dept} • {doc.exp} experience
                      </small>
                    </div>
                  </div>

                  <div className="text-end">
                    <div>₹{doc.fee}</div>
                    <button className="btn btn-warning btn-sm mt-1">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className="card p-3 mb-3">
            <h5>Patients Reviews & Ratings</h5>
            <h3 className="mt-2">4.7 ⭐⭐⭐⭐⭐</h3>
            <p className="text-muted">105 Reviews</p>
            <p className="mb-0">📍 123 Main Street, Delhi</p>
          </div>

          {/* Map */}
          <div className="card p-3 mb-3">
            <h5>Map Location</h5>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span>123 Main Street, Delhi</span>
              <button className="btn btn-warning">Get Direction</button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="col-lg-4">

          {/* Fees */}
          <div className="card p-3 mb-3">
            <h5>Consultation Fees</h5>
            <div className="d-flex justify-content-between">
              <span>OPD Consultation</span>
              <span>₹500</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Emergency</span>
              <span>₹1200</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>ICU per day</span>
              <span>₹5000</span>
            </div>
          </div>

          {/* Timings */}
          <div className="card p-3 mb-3">
            <h5>Timings</h5>
            <p className="mb-1">Open 24 Hours</p>
            <small className="text-muted">
              Monday - Saturday: 9 AM - 8 PM
            </small>
          </div>

          {/* Amenities */}
          <div className="card p-3 mb-3">
            <h5>Facilities & Amenities</h5>
            <div className="d-flex flex-wrap gap-2">
              {[
                "Parking",
                "Pharmacy",
                "Ambulance",
                "Waiting Lounge",
                "Online Payment",
                "Insurance Accepted",
              ].map((a) => (
                <span key={a} className="badge bg-light text-dark border p-2">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Payments */}
          <div className="card p-3 mb-3">
            <h5>Insurance & Payment</h5>
            <p className="mb-1">Cash</p>
            <p className="mb-1">Credit/Debit Cards</p>
            <p className="mb-0">UPI</p>
          </div>

          {/* Contact */}
          <div className="card p-3 mb-3">
            <h5>Contact Information</h5>
            <p className="mb-1">📞 +91 9876543210</p>
            <p className="mb-1">✉ info@citycarehospital.com</p>
            <p className="mb-0">🌐 www.citycarehospital.com</p>
          </div>

          {/* FAQ */}
          <div className="card p-3 mb-3">
            <h5>Frequently Asked Questions</h5>
            <p className="mb-1">✔ Is emergency available?</p>
            <p className="mb-1">✔ Do they accept insurance?</p>
            <p className="mb-0">✔ Is parking available?</p>
          </div>

        </div>
      </div>
      
    </div>
     <footer className="container mt-5 py-4 border-top">
      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-3 fw-bold text-primary">
          GWT-QR
        </div>

        <div className="col-md-6 d-flex justify-content-center gap-4 text-muted small my-3 my-md-0">
          <span>About GWT-QR</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>

        <div className="col-md-3 d-flex justify-content-center justify-content-md-end gap-2">
          <span>📘</span>
          <span>🐦</span>
          <span>🔗</span>
        </div>
      </div>

      <div className="text-center text-muted small mt-3">
        © 2024 GWT-QR
      </div>
    </footer>
  </div>
    
    
  );
};

export default HospitalDetails;
