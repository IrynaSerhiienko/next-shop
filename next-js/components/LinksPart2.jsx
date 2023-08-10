import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/Navbar.module.scss";

export default function LinksPart2() {
  const { pathname } = useRouter();

  const LinksPart2 = [
    { id: 5, title: "gallery", path: "/gallery" },
    { id: 6, title: "payment & delivery", path: "/paymentDelivery" },
    { id: 7, title: "reviews", path: "/reviews" },
  ];

  return (
    <>
      {LinksPart2.map(({ id, title, path }) => (
        <Link legacyBehavior key={id} href={path}>
          <a className={pathname === path ? s.active : null}>{title}</a>
        </Link>
      ))}
    </>
  );
}


