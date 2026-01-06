import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Booking from "./pages/Booking.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

/**
 * Main App Component
 *
 * Root component that sets up:
 * - React Router for navigation
 * - Global layout structure (Navbar, Main, Footer)
 * - Route definitions for all pages
 *
 * Routes:
 * - / - Home page
 * - /about - About page
 * - /services - Services page
 * - /gallery - Gallery page
 * - /booking - Booking page
 * - /contact - Contact page
 *
 * @component
 */
function App() {
  return (
    <Router>
      <div className="app-root">
        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="app-main" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
