import React, { useEffect, useRef } from "react";
import "./Blog.css";

import img01 from "../assets/img01.jpg";
import img04 from "../assets/img04.jpg";
import img07 from "../assets/img07.jpg";

const Blog = () => {
  const eventsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("event-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    eventsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !eventsRef.current.includes(el)) {
      eventsRef.current.push(el);
    }
  };

  const openMenu = () => {
    window.dispatchEvent(new CustomEvent("open-sidebar"));
  };

  return (
    <main className="events-page">

      {/* NAVBAR
      <nav className="events-navbar">
        <button className="events-menu" onClick={openMenu}>
          <span></span>
          <span></span>
        </button>

        <div className="events-logo">
          The Hobby Hoarders Girls Club
        </div>

        <button className="events-join">
          Join the Club ↗
        </button>
      </nav> */}


      {/* HEADER */}
      <section className="events-header">
        <span>03 / WHAT'S HAPPENING</span>

        <h1>
          Come for the hobby.
          <br />
          <em>stay for the memories.</em>
        </h1>

        <p>
          Little gatherings for girls who like making,
          discovering and doing too many things.
        </p>
      </section>


      {/* FEATURED EVENT */}
      <section
        className="featured-event event-reveal"
        ref={addRef}
      >
        <div className="event-image">
          <img src={img01} alt="Hobby Maxxing Hour" />
        </div>

        <div className="featured-info">
          <p className="event-label">UP NEXT ✦</p>

          <h2>Hobby Maxxing Hour</h2>

          <p className="event-date">
            13 SEPTEMBER · SUNDAY
          </p>

          <p className="event-details">
            4:30 PM — 7:30 PM
            <br />
            Jessie's Cafe, Andheri
          </p>

          <p className="event-description">
            Bring your hobby or pick one from our stations.
            Make something, meet like-minded girls and
            spend three hours doing things you love.
          </p>

          <button className="event-button">
            View Event ↗
          </button>
        </div>
      </section>


      {/* MINI EVENTS */}
      <section className="event-list">

        <div className="mini-event event-reveal" ref={addRef}>
          <div className="mini-image">
            <img src={img04} alt="Creative meetup" />
          </div>

          <div>
            <span>PAST / 01</span>
            <h3>Make Something Day</h3>
            <p>
              Messy tables, tiny projects and
              absolutely no pressure to be good at it.
            </p>
          </div>

          <b>↗</b>
        </div>


        <div className="mini-event event-reveal" ref={addRef}>
          <div className="mini-image">
            <img src={img07} alt="Hobby meetup" />
          </div>

          <div>
            <span>PAST / 02</span>
            <h3>Girls, Crafts & Chai</h3>
            <p>
              A cosy afternoon of crafts,
              conversations and new hobbies.
            </p>
          </div>

          <b>↗</b>
        </div>

      </section>


      {/* FOOTER LINE */}
      <div className="events-end">
        <span>✦</span>
        MORE HOBBIES. MORE GIRLS. MORE STORIES.
        <span>✦</span>
      </div>

    </main>
  );
};

export default Blog;