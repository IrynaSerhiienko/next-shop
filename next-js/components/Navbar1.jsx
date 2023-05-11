import { useState, useEffect } from "react";
// import { useWindowSize } from 'react-use'
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Call from "./Call";
import Links1 from "./Links1";
import Location from "./Location";
import Logo from "./Logo";

import s from "../styles/Navbar1.module.scss";

export default function Navbar1() {
// export default function Navbar1({ navigation }) {
// const { width } = useWindowSize();
// const isMobile = width < 1130;

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

  const navLinksLeft = [
    { id: 1, title: "home", path: "/" },
    { id: 2, title: "about us", path: "/aboutUs" },
    { id: 3, title: "menu", path: "/menu" },
    { id: 4, title: "contacts", path: "/contacts" },
  ];

  const navLinksRight = [
    { id: 5, title: "gallery", path: "/gallery" },
    { id: 6, title: "payment & delivery", path: "/paymentDelivery" },
    { id: 7, title: "reviews", path: "/reviews" },
    //   { id: 8, title: 'Posts', path: '/posts' },
  ];

  return typeof mobile !== "undefined" ? (
    mobile ? (
      <>
        <nav className={s.navbar}>
          <Logo />
          <div
            className={`${s.navItems} ${isOpen && s.open}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Links1 links={navLinksLeft} />
            <Links1 links={navLinksRight} />
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
            <Links1 links={navLinksLeft} />
          </div>
          <Logo />
          <div
            className={`${s.navItems} ${isOpen && s.open}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Links1 links={navLinksRight} />
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
//   return  (
//     <> 
//         {isMobile ?
//         (<>
//             <nav className={s.navbar}>
//                 {/* <p>mobile view</p> */}
//                 <Logo />
//                 <div className={`${s.navItems} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
//                     <Links1 links={navLinksLeft}/>
//                     <Links1 links={navLinksRight}/>
//                 </div>
//                 <div className={`${s.navToggle} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
//                     <div className={s.bar}></div>
//                 </div>
//             </nav>
//             {showOverlay && <div className={s.overlay} onClick={() => {setIsOpen(!isOpen); toggleOverlay;}}></div>}
//         </>) :
//         (<>
//             <nav className={s.navbar}>
//                 {/* <p>desktop view</p> */}
//                 <Location/>
//                 <div className={`${s.navItems} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
//                 <Links1 links={navLinksLeft}/>
//                 </div>
//                 <Logo />
//                 <div className={`${s.navItems} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
//                     <Links1 links={navLinksRight}/>
//                 </div>
//                 <div className={`${s.navToggle} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
//                     <div className={s.bar}></div>
//                 </div>
//                 <Call/>
//             </nav>
//             {showOverlay && <div className={s.overlay} onClick={() => {setIsOpen(!isOpen); toggleOverlay;}}></div>}
//         </>)}

        {/* <nav className={s.navbar}>
            <Location/>
            <div className={`${s.navItems} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
               <Links1 links={navLinksLeft}/>
            </div>
            <Logo />
            <div className={`${s.navItems} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
                <Links1 links={navLinksRight}/>
            </div>
            <div className={`${s.navToggle} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
                <div className={s.bar}></div>
            </div>
            <Call/>
        </nav>
        {showOverlay && <div className={s.overlay} onClick={() => {setIsOpen(!isOpen); toggleOverlay;}}></div>} */}




 