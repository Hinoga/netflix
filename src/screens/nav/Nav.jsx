import React, { useEffect, useState } from "react";
import "./nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) setShow(true);
      else setShow(false);
    });
    return () => window.removeEventListener("scroll", setShow(false));
  }, []);

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />

      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="Netflix avatar"
      />
    </div>
  );
};

export default Nav;
