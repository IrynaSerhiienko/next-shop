import { useState, useEffect } from "react";
// import dynamic from 'next/dynamic';
// const Call = dynamic(() => import('./call'), { ssr: false });

// import Links1 from "./Links1";
import Call from "./Call";
import Location from "./Location";
import Logo from "./Logo";

import LinksPart1 from "./LinksPart1";
import LinksPart2 from "./LinksPart2";

import s from "../styles/Navbar.module.scss";

export default function Navbar() {
  const [mobile, setMobile] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  useEffect(() => {
    setShowOverlay(isOpen);
    const handleResize = () => {
      setIsOpen(false);
      setShowOverlay(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 1130 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return typeof mobile !== "undefined" ? (
    mobile ? (
      <>
        <nav className={s.navbar}>
          <Logo />
          <div
            className={`${s.navItems} ${isOpen && s.open}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <LinksPart1 />
            <LinksPart2 />
            {/* <Links1 links={navLinksLeft} /> */}
            {/* <Links1 links={navLinksRight} /> */}
          </div>
          <div
            className={`${s.navToggle} ${isOpen && s.open}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={s.bar}></div>
          </div>
        </nav>
        {showOverlay && (
          <div
            className={s.overlay}
            onClick={() => {
              setIsOpen(!isOpen);
              toggleOverlay;
            }}
          ></div>
        )}
      </>
    ) : (
      <>
        <nav className={s.navbar}>
          <Location />
          <div
            className={`${s.navItems} ${isOpen && s.open}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <LinksPart1 />
            {/* <Links1 links={navLinksLeft} /> */}
          </div>
          <Logo />
          <div
            className={`${s.navItems} ${isOpen && s.open}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <LinksPart2 />
            {/* <Links1 links={navLinksRight} /> */}
          </div>
          <div
            className={`${s.navToggle} ${isOpen && s.open}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={s.bar}></div>
          </div>
          <Call />
        </nav>
        {showOverlay && (
          <div
            className={s.overlay}
            onClick={() => {
              setIsOpen(!isOpen);
              toggleOverlay;
            }}
          ></div>
        )}
      </>
    )
  ) : null;
}
