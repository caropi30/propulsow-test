import React, { useState } from "react";
import "./index.scss";
import { FiSearch } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <>
      <nav className="navbar container">
        <figure className="navbar-logo">
          <img src="../../img/logo.png" alt="Logo Propulso" />
        </figure>
        <div className="navbar-left">
          <div className="navbar-left--btn">
            <div>
              <button className="btn-search">
                <FiSearch size={30} />
              </button>
              <button className="btn-shop">
                <IoBagOutline size={30} />
              </button>
            </div>
            <button
              className="btn-responsive"
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? <BiMenu size={30} /> : <VscClose size={30} />}
            </button>
          </div>
          <ul
            className={
              isMobile ? "navbar-left--menu-lg" : "navbar-left--menu-sm"
            }
            onClick={() => setIsMobile(false)}
          >
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Galeria</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
