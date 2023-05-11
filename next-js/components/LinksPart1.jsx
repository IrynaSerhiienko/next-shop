import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/Navbar.module.scss";

export default function LinksPart1() {
  const { pathname } = useRouter();

  const LinksPart1 = [
    { id: 1, title: "home", path: "/" },
    { id: 2, title: "about us", path: "/aboutUs" },
    { id: 3, title: "menu", path: "/menu" },
    { id: 4, title: "contacts", path: "/contacts" },
  ];

  return (
    <>
      {LinksPart1.map(({ id, title, path }) => (
        <Link legacyBehavior key={id} href={path}>
          <a className={pathname === path ? s.active : null}>{title}</a>
        </Link>
      ))}
    </>
  );
}
        


