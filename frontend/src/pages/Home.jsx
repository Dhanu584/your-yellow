import { useEffect, useState } from "react";
import "./Home.css";

import img01 from "../assets/img01.jpg";
import img02 from "../assets/img02.jpg";
import img03 from "../assets/img03.jpg";
import img04 from "../assets/img04.jpg";
import img05 from "../assets/img05.jpg";
import img06 from "../assets/img06.jpg";
import img07 from "../assets/img07.jpg";
import img08 from "../assets/img08.jpg";
import img09 from "../assets/img09.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";

const images = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoReady, setLogoReady] = useState(false);

  /* =========================================
     SCROLL
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(
        Math.max(window.scrollY / 300, 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  /* =========================================
     LOGO ENTRANCE
  ========================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoReady(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);


  /* =========================================
     NAVIGATION
  ========================================= */

  const handleNavigation = (section) => {
    setMenuOpen(false);

    if (section === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const element =
      document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  /* =========================================
     SCROLLING LOGO
  ========================================= */

  const logoScale =
    1 - scrollProgress * 0.72;

  const logoTop =
    `calc(43vh - ${
      scrollProgress * 43
    }vh + ${
      scrollProgress * 36
    }px)`;

  const logoStyle = {
    top: logoTop,

    transform: `
      translate(-50%, -50%)
      scale(${logoScale})
    `,
  };

  const logoOpacity = Math.max(
    0,
    1 - scrollProgress * 1.12
  );

  const navbarLogoVisible =
    scrollProgress > 0.9;


  return (
    <>
      {/* =========================================
          NAVBAR
      ========================================= */}

      <header className="home-navbar">

        <button
          className="menu-trigger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          type="button"
        >

          <span className="menu-lines">
            <span></span>
            <span></span>
          </span>

          <span className="menu-text">
            MENU
          </span>

        </button>


        <div className="navbar-logo-space">

          <span
            className={
              navbarLogoVisible
                ? "nav-logo visible"
                : "nav-logo"
            }
          >
            Your Yellow
          </span>

        </div>


        <button
          className="home-nav-cta"
          onClick={() =>
            handleNavigation("contact")
          }
          type="button"
          aria-label="Join Your Yellow"
        >
          <span>Y</span>
        </button>

      </header>


      {/* =========================================
          SIDEBAR OVERLAY
      ========================================= */}

      <div
        className={
          menuOpen
            ? "sidebar-overlay show"
            : "sidebar-overlay"
        }
        onClick={() => setMenuOpen(false)}
      />


      {/* =========================================
          SIDEBAR
      ========================================= */}

      <aside
        className={
          menuOpen
            ? "website-sidebar open"
            : "website-sidebar"
        }
      >

        <div className="sidebar-top">

          <div className="sidebar-brand">
            Your Yellow
          </div>

          <button
            className="sidebar-close"
            onClick={() => setMenuOpen(false)}
            type="button"
            aria-label="Close menu"
          >
            ×
          </button>

        </div>


        <nav className="sidebar-navigation">

          <button
            className="sidebar-link"
            onClick={() =>
              handleNavigation("home")
            }
            type="button"
          >
            <span>01</span>
            Home
          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              handleNavigation("about")
            }
            type="button"
          >
            <span>02</span>
            About Us
          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              handleNavigation("skills")
            }
            type="button"
          >
            <span>03</span>
            The Dopamine Edit
          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              handleNavigation("work")
            }
            type="button"
          >
            <span>04</span>
            Experiences
          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              handleNavigation("contact")
            }
            type="button"
          >
            <span>05</span>
            Join Us
          </button>

        </nav>


        <div className="sidebar-bottom">

          <p>
            A space for good people,
            good memories and little
            moments of sunshine.
          </p>

        </div>

      </aside>


      {/* =========================================
          HOME
      ========================================= */}

      <main
        className="home-page"
        id="home"
      >

        <section className="logo-stage">


          {/* =========================================
              BACKGROUND
          ========================================= */}

          <div className="background-paper"></div>

          <div className="yellow-poster"></div>

          <div className="yellow-edge"></div>


          {/* =========================================
              SMALL SIDE LABELS
          ========================================= */}

          <div className="side-label left-label">
            YOUR YELLOW
          </div>

          <div className="side-label right-label">
            THE DOPAMINE BOOST
          </div>


          {/* =========================================
              MAIN LOGO
          ========================================= */}

          <div
            className={`your-yellow-logo ${
              logoReady
                ? "logo-ready"
                : ""
            }`}
            style={{
              ...logoStyle,
              opacity: logoReady
                ? logoOpacity
                : 0,
            }}
          >

            <div className="logo-main-text">

              <span className="logo-your">
                Your
              </span>

              <span className="logo-yellow">
                Yellow
              </span>

              <div className="logo-tagline">
                The Dopamine Boost
              </div>

            </div>

          </div>


          {/* =========================================
              INTRO LINE
          ========================================= */}

          <div
            className="home-intro"
            style={{
              opacity: Math.max(
                0,
                1 -
                  scrollProgress * 2.5
              ),
            }}
          >

            <span className="intro-line"></span>

            <p>
              little moments, big dopamine.
            </p>

            <span className="intro-line"></span>

          </div>


          {/* =========================================
              MOVING PHOTO STRIP
          ========================================= */}

          <div
            className="photo-marquee"
            style={{
              opacity: Math.max(
                0,
                1 -
                  scrollProgress * 2.2
              ),
            }}
          >

            <div className="photo-track">

              {/* FIRST SET */}

              {images.map(
                (image, index) => (

                  <div
                    className={`marquee-photo photo-${(index % 6) + 1}`}
                    key={`first-${index}`}
                  >

                    <img
                      src={image}
                      alt={`Your Yellow moment ${
                        index + 1
                      }`}
                    />

                  </div>

                )
              )}


              {/* DUPLICATE SET
                  Needed for seamless loop */}

              {images.map(
                (image, index) => (

                  <div
                    className={`marquee-photo photo-${(index % 6) + 1}`}
                    key={`second-${index}`}
                    aria-hidden="true"
                  >

                    <img
                      src={image}
                      alt=""
                    />

                  </div>

                )
              )}

            </div>

          </div>


          {/* =========================================
              SCROLL INDICATOR
          ========================================= */}

          <div
            className="scroll-indicator"
            style={{
              opacity:
                1 -
                scrollProgress * 3,
            }}
          >

            <span>
              SCROLL TO EXPLORE
            </span>

            <div className="scroll-line"></div>

          </div>


        </section>

      </main>
    </>
  );
};

export default Home;