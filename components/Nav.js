import { socialMedia, menu } from "../db";
import Link from "next/link";
import nav from "../styles/Nav.module.css";
import { useState} from "react";
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navToggle = () => {
    setNavOpen(!navOpen);
  };

  let position;

  if (navOpen) {
    position = {
      left: 0,
      transition: "400ms linear",
    };
  }

  return (
    <nav>
      <div className={nav.navBar}>
        <div className={nav.navBtn} onClick={() => navToggle()}>
          <span></span>
          <p>menu</p>
        </div>
        <div className={nav.navLogo}>AB</div>
        <div className={nav.social}>
          {socialMedia.map((s) => {
            return (
              <a href={s.link} key={s.id} target="_">
                <i className={s.icon}></i>
              </a>
            );
          })}
        </div>
      </div>
      <div className={nav.navMenu} style={position}>
        {menu.map((m) => {
          return (
            <Link key={m.id} href={m.link}>
              <a onClick={() => navToggle()}>{m.name}</a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
