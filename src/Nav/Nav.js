import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  

  return (
    <header>
      <div className="container">
        
        <h2>
          <img className="nm"
            src="https://cdn-icons-png.flaticon.com/512/648/648872.png"
            alt=""
          />{" "}
          MagicWish
        </h2>
        <div className="e">
          <button onClick={() => setShow(!show)} className="d">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="currentColor"
              class="bi bi-card-list"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
            </svg>{" "}
          </button>
          {show && (
            <div className="n">
              <p className="cz" >Home</p>
              <p className="cx">Products</p>
              <p className="cc">Pricing</p>
              <p className="cv">Contact Us</p>
            </div>
          ) }
        </div>
        <ol>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ol>
      </div>
    </header>
  );
}

export default Nav;
