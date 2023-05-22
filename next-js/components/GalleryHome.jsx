import { useState, useEffect, useMemo} from "react";

import Image from "next/image";
import Link from "next/link";
import GalleryTitle from "./GalleryTitle";
import SwiperJSGalleryLinks from "./SwiperJSGalleryLinks";
import SwiperJSAllGallery from "./SwiperJSAllGallery";
import s from "../styles/GalleryHome.module.scss";

const links = [
  "for her",
  "for him",
  "on a children’s party",
  "appreciation cake",
  "corporative",
  "wedding proposal",
];

export default function GalleryHome({ gallery }) {
  const [mobile, setMobile] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState("her");

  const filteredGallery = useMemo(() => {
    return gallery.filter((item) =>
      item.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [gallery, selectedCategory]);

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
      <section className={s.galleryContainer}>
        <div className={s.wrapper}>
          <GalleryTitle />
          <div className={s.swiperLinksContainer}>
            <SwiperJSGalleryLinks galleryLinks={links} />
          </div>
          <div className={s.swiperGalleryContainer}>
            <SwiperJSAllGallery gallery={gallery} />
          </div>
          <div className={s.linksScrollHolder}>
            <div className={s.scroll}>
              <span className={s.text}>scroll</span>
              <div className={s.imgContainer}>
                <Image
                  alt="scroll"
                  src="/img/main_gallery/indicator.svg"
                  fill
                  priority={true}
                  style={{ transform: "translate3d(0, 0, 0)" }}
                />
              </div>
            </div>
            <div className={s.link}>
              <Link href="/gallery">
                <span className={s.text}>see all</span>
                <div className={s.imgContainer}>
                  <Image
                    alt="arrow_see all"
                    src="/img/main_gallery/arrow.svg"
                    fill
                    priority={true}
                    style={{ transform: "translate3d(0, 0, 0)" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <section className={s.galleryContainer}>
        <div className={s.wrapper}>
          <GalleryTitle />
          <div className={s.totalContainer}>
            <div className={s.asideContainer}>
                <aside>
                <ul className={s.galleryLists}>
                    <li
                    className={`${s.galleryList} ${
                        selectedCategory === "her" ? s.active : ""
                    }`}
                    onClick={() => setSelectedCategory("her")}
                    >
                    for her
                    </li>
                    <li
                    className={`${s.galleryList} ${
                        selectedCategory === "him" ? s.active : ""
                    }`}
                    onClick={() => setSelectedCategory("him")}
                    >
                    for him
                    </li>
                    <li
                    className={`${s.galleryList} ${
                        selectedCategory === "children" ? s.active : ""
                    }`}
                    onClick={() => setSelectedCategory("children")}
                    >
                    on a children’s party
                    </li>
                    <li
                    className={`${s.galleryList} ${
                        selectedCategory === "appreciation" ? s.active : ""
                    }`}
                    onClick={() => setSelectedCategory("appreciation")}
                    >
                    appreciation cake
                    </li>
                    <li
                    className={`${s.galleryList} ${
                        selectedCategory === "corporative" ? s.active : ""
                    }`}
                    onClick={() => setSelectedCategory("corporative")}
                    >
                    corporative
                    </li>
                    <li
                    className={`${s.galleryList} ${
                        selectedCategory === "wedding" ? s.active : ""
                    }`}
                    onClick={() => setSelectedCategory("wedding")}
                    >
                    wedding proposal
                    </li>
                </ul>
                </aside>
            </div>
            <div className={s.swiperGalleryContainer}>
                <SwiperJSAllGallery gallery={filteredGallery} />
            </div>
          </div>
          <div className={s.linksScrollHolder}>
            <div className={s.scroll}>
              <span className={s.text}>scroll</span>
              <div className={s.imgContainer}>
                <Image
                  alt="scroll"
                  src="/img/main_gallery/indicator.svg"
                  fill
                  priority={true}
                  style={{ transform: "translate3d(0, 0, 0)" }}
                />
              </div>
            </div>
            <div className={s.link}>
              <Link href="/gallery">
                <span className={s.text}>see all</span>
                <div className={s.imgContainer}>
                  <Image
                    alt="arrow_see all"
                    src="/img/main_gallery/arrow.svg"
                    fill
                    priority={true}
                    style={{ transform: "translate3d(0, 0, 0)" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  ) : null;
}
