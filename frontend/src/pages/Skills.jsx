import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

import img01 from "../assets/img01.jpg";
import img02 from "../assets/img02.jpg";
import img03 from "../assets/img03.jpg";
import img04 from "../assets/img04.jpg";
import img05 from "../assets/img05.jpg";

const hobbies = [
  {
    number: "01",
    title: "Journaling",
    subtitle: "WRITE • REFLECT • REMEMBER",
    description:
      "A quiet little space to write your thoughts, collect memories, decorate pages and make sense of all the things happening inside your head.",
    note: "for the girls who romanticise their ordinary days.",
    image: img01,
    tag: "slow mornings",
    color: "pink",
    quote: "Dear diary, today felt a little special.",
  },
  {
    number: "02",
    title: "Art & Craft",
    subtitle: "MAKE • PLAY • CREATE",
    description:
      "Paint something messy. Make a tiny collage. Try clay, beads, paper or anything that lets your hands turn an idea into something real.",
    note: "it doesn't have to be perfect to be yours.",
    image: img02,
    tag: "creative mess",
    color: "yellow",
    quote: "A little mess is usually where the magic starts.",
  },
  {
    number: "03",
    title: "Book Club",
    subtitle: "READ • DISCOVER • DISCUSS",
    description:
      "For the girls who always have a book in their bag. Discover new stories, exchange recommendations and turn reading into a shared little ritual.",
    note: "one more chapter is always worth it.",
    image: img03,
    tag: "one more chapter",
    color: "cream",
    quote: "Books take you places without asking for a ticket.",
  },
  {
    number: "04",
    title: "DIY & Crochet",
    subtitle: "THREAD • BUILD • MAKE",
    description:
      "Learn something with your hands. Crochet a flower, customise an old shirt, make jewellery or turn something forgotten into something lovely.",
    note: "made slowly, made with love.",
    image: img04,
    tag: "made by hand",
    color: "green",
    quote: "Keep your hands busy making something beautiful.",
  },
  {
    number: "05",
    title: "Creative Memories",
    subtitle: "CAPTURE • COLLECT • KEEP",
    description:
      "Photographs, little notes, tickets, flowers, playlists and tiny moments — because sometimes the best hobby is simply noticing your own life.",
    note: "collect moments, not just things.",
    image: img05,
    tag: "little memories",
    color: "rose",
    quote: "Some moments deserve a little space in your journal.",
  },
];

const initialStickers = [
  {
    id: 1,
    text: "♡ make something",
    x: 5,
    y: 16,
    rotate: -7,
    type: "note",
  },
  {
    id: 2,
    text: "currently obsessed",
    x: 80,
    y: 12,
    rotate: 5,
    type: "pink",
  },
  {
    id: 3,
    text: "✦",
    x: 12,
    y: 82,
    rotate: -10,
    type: "spark",
  },
];

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [direction, setDirection] = useState("next");
  const [targetPage, setTargetPage] = useState(null);

  const [stickers, setStickers] = useState(initialStickers);

  const journalRef = useRef(null);
  const dragRef = useRef(null);
  const touchStart = useRef(null);

  const current = hobbies[currentPage];

  const target =
    targetPage !== null
      ? hobbies[targetPage]
      : null;


  /* =========================================
     PAGE CHANGE
  ========================================= */

  const changePage = (newPage, dir) => {
    if (
      flipping ||
      newPage < 0 ||
      newPage >= hobbies.length ||
      newPage === currentPage
    ) {
      return;
    }

    setDirection(dir);
    setTargetPage(newPage);
    setFlipping(true);

    setTimeout(() => {
      setCurrentPage(newPage);
    }, 620);

    setTimeout(() => {
      setFlipping(false);
      setTargetPage(null);
    }, 760);
  };


  const nextPage = () => {
    if (currentPage < hobbies.length - 1) {
      changePage(currentPage + 1, "next");
    }
  };


  const previousPage = () => {
    if (currentPage > 0) {
      changePage(currentPage - 1, "previous");
    }
  };


  /* =========================================
     KEYBOARD
  ========================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextPage();
      }

      if (event.key === "ArrowLeft") {
        previousPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, flipping]);


  /* =========================================
     DRAG STICKERS
  ========================================= */

  const startDrag = (event, sticker) => {
    event.preventDefault();

    const journal = journalRef.current;

    if (!journal) return;

    const rect = journal.getBoundingClientRect();

    dragRef.current = {
      id: sticker.id,
      rect,
    };

    const moveSticker = (moveEvent) => {
      if (!dragRef.current) return;

      const { id, rect } = dragRef.current;

      let x =
        ((moveEvent.clientX - rect.left) /
          rect.width) *
        100;

      let y =
        ((moveEvent.clientY - rect.top) /
          rect.height) *
        100;

      x = Math.max(2, Math.min(94, x));
      y = Math.max(3, Math.min(92, y));

      setStickers((previous) =>
        previous.map((item) =>
          item.id === id
            ? {
                ...item,
                x,
                y,
              }
            : item
        )
      );
    };

    const stopDrag = () => {
      dragRef.current = null;

      window.removeEventListener(
        "pointermove",
        moveSticker
      );

      window.removeEventListener(
        "pointerup",
        stopDrag
      );
    };

    window.addEventListener(
      "pointermove",
      moveSticker
    );

    window.addEventListener(
      "pointerup",
      stopDrag
    );
  };


  /* =========================================
     MOBILE SWIPE
  ========================================= */

  const handleTouchStart = (event) => {
    touchStart.current =
      event.touches[0].clientX;
  };


  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;

    const touchEnd =
      event.changedTouches[0].clientX;

    const difference =
      touchStart.current - touchEnd;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextPage();
      } else {
        previousPage();
      }
    }

    touchStart.current = null;
  };


  /* =========================================
     LEFT PAGE COMPONENT
  ========================================= */

  const LeftPage = ({ data }) => {
    if (!data) return null;

    return (
      <div className="journal-left">

        <div className="paper-holes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="left-page-inner">

          <div className="journal-date">
            THE HOBBY HOARDERS
          </div>

          <div className="left-number">
            {data.number}
          </div>

          <p className="left-small">
            today's little reminder
          </p>

          <h2>
            There is no such
            <br />
            thing as
            <br />
            <em>too many hobbies.</em>
          </h2>

          <div className="hand-line"></div>

          <p className="left-note">
            {data.quote}
          </p>

          <div className="left-mini-entry">

            <span className="entry-line"></span>

            <span>
              hobby no. {data.number}
            </span>

            <span className="entry-heart">
              ♡
            </span>

          </div>

          <div className="left-bottom">

            <span>CREATE</span>

            <span>✦</span>

            <span>EXPLORE</span>

            <span>♡</span>

            <span>CONNECT</span>

          </div>

        </div>

      </div>
    );
  };


  /* =========================================
     RIGHT PAGE COMPONENT
  ========================================= */

  const RightPage = ({ data }) => {
    if (!data) return null;

    return (
      <div
        className={`journal-right page-${data.color}`}
      >

        <div className="right-page-inner">

          <div className="page-top">

            <span>
              HOBBY {data.number}
            </span>

            <span>
              2025 —
            </span>

          </div>


          <div className="hobby-photo-wrap">

            <div className="photo-tape"></div>

            <img
              src={data.image}
              alt={data.title}
            />

            <span className="photo-caption">
              {data.tag}
            </span>

          </div>


          <div className="hobby-content">

            <p className="hobby-subtitle">
              {data.subtitle}
            </p>

            <h2>
              {data.title}
            </h2>

            <p className="hobby-description">
              {data.description}
            </p>

            <div className="hobby-note">

              <span className="note-arrow">
                ↳
              </span>

              <span>
                {data.note}
              </span>

            </div>

          </div>


          <div className="page-corner">
            {data.number}
          </div>

        </div>

      </div>
    );
  };


  return (
    <section className="skills-page">

      {/* =====================================
          BACKGROUND DECOR
      ===================================== */}

      <div className="skills-bg-word">
        hobbies
      </div>

      <div className="skills-doodle doodle-one">
        ✦
      </div>

      <div className="skills-doodle doodle-two">
        ♡
      </div>

      <div className="skills-doodle doodle-three">
        ✿
      </div>

      <div className="skills-doodle doodle-four">
        ✧
      </div>


      {/* =====================================
          INTRO
      ===================================== */}

      <header className="skills-intro">

        <p className="skills-eyebrow">
          OUR HOBBIES • 05 PAGES
        </p>

        <h1>
          Collecting hobbies
          <br />
          like little <em>memories.</em>
        </h1>

        <p className="skills-intro-text">
          Open our little hobby journal.
          <br />
          There is always something new to try.
        </p>

      </header>


      {/* =====================================
          JOURNAL AREA
      ===================================== */}

      <div
        className="journal-area"
        ref={journalRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* ---------------------------------
            MOVABLE STICKERS
        --------------------------------- */}

        {stickers.map((sticker) => (
          <div
            key={sticker.id}
            className={`journal-sticker sticker-${sticker.type}`}
            style={{
              left: `${sticker.x}%`,
              top: `${sticker.y}%`,
              transform:
                `rotate(${sticker.rotate}deg)`,
            }}
            onPointerDown={(event) =>
              startDrag(event, sticker)
            }
          >
            {sticker.text}
          </div>
        ))}


        {/* =================================
            BOOK
        ================================= */}

        <div
          className={`
            hobby-book
            ${flipping ? "book-is-flipping" : ""}
            ${direction}
          `}
        >

          <div className="book-shadow"></div>


          {/* =================================
              NORMAL CURRENT SPREAD
          ================================= */}

          {!flipping && (
            <>
              <LeftPage data={current} />

              <RightPage data={current} />
            </>
          )}


          {/* =================================
              NEXT PAGE FLIP
          ================================= */}

          {flipping &&
            direction === "next" && (
              <>

                {/* Current left page stays visible */}
                <div className="static-left">
                  <LeftPage data={current} />
                </div>


                {/* Next right page underneath */}
                <div className="under-right">
                  <RightPage data={target} />
                </div>


                {/* Actual turning sheet */}
                <div className="turning-sheet turning-next">

                  <div className="turn-front">
                    <RightPage data={current} />
                  </div>

                  <div className="turn-back">
                    <LeftPage data={target} />
                  </div>

                </div>

              </>
            )}


          {/* =================================
              PREVIOUS PAGE FLIP
          ================================= */}

          {flipping &&
            direction === "previous" && (
              <>

                {/* Current right page stays visible */}
                <div className="static-right">
                  <RightPage data={current} />
                </div>


                {/* Previous left page underneath */}
                <div className="under-left">
                  <LeftPage data={target} />
                </div>


                {/* Actual turning sheet */}
                <div className="turning-sheet turning-previous">

                  <div className="turn-front">
                    <LeftPage data={current} />
                  </div>

                  <div className="turn-back">
                    <RightPage data={target} />
                  </div>

                </div>

              </>
            )}

        </div>


        {/* =================================
            NAVIGATION
        ================================= */}

        <div className="journal-navigation">

          <button
            className="page-arrow"
            onClick={previousPage}
            disabled={
              currentPage === 0 ||
              flipping
            }
            aria-label="Previous hobby"
          >
            ←
          </button>


          <div className="page-progress">

            <span className="progress-current">
              0{currentPage + 1}
            </span>

            <div className="progress-lines">

              {hobbies.map((_, index) => (
                <span
                  key={index}
                  className={
                    index === currentPage
                      ? "active"
                      : ""
                  }
                ></span>
              ))}

            </div>

            <span className="progress-total">
              05
            </span>

          </div>


          <button
            className="page-arrow"
            onClick={nextPage}
            disabled={
              currentPage === hobbies.length - 1 ||
              flipping
            }
            aria-label="Next hobby"
          >
            →
          </button>

        </div>


        <p className="drag-hint">
          drag the little notes around ♡
        </p>

      </div>


      {/* =====================================
          BOTTOM
      ===================================== */}

      <div className="skills-bottom">

        <span>CREATE</span>

        <i>✦</i>

        <span>EXPLORE</span>

        <i>♡</i>

        <span>CONNECT</span>

      </div>

    </section>
  );
};

export default Skills;