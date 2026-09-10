// import { useState, useEffect } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//     });

//     setMenuOpen(false);
//   };

//   return (
//     <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="nav-inner">

//         {/* LEFT SIDE EMPTY
//             Main Echoriah logo will move here */}
//         <div className="nav-logo-space"></div>


//         {/* DESKTOP NAVIGATION */}
//         <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <button
//             className="nav-link"
//             onClick={() => scrollToSection("home")}
//           >
//             Home
//           </button>

//           <button
//             className="nav-link"
//             onClick={() => scrollToSection("about")}
//           >
//             About
//           </button>

//           <button
//             className="nav-link"
//             onClick={() => scrollToSection("skills")}
//           >
//             What We Do
//           </button>

//           <button
//             className="nav-link"
//             onClick={() => scrollToSection("work")}
//           >
//             Our Work
//           </button>

//           {/* Mobile only contact */}
//           <button
//             className="nav-link mobile-contact"
//             onClick={() => scrollToSection("contact")}
//           >
//             Contact
//           </button>
//         </nav>


//         {/* RIGHT SIDE */}
//         <button
//           className="nav-cta"
//           onClick={() => scrollToSection("contact")}
//         >
//           Let's Talk <span>↗</span>
//         </button>


//         {/* MOBILE MENU BUTTON */}
//         <button
//           className={`hamburger ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//       </div>
//     </header>
//   );
// };

// export default Navbar;