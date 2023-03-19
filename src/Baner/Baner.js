import React from "react";
import "./Baner.css";

function Baner() {
  return (
    <section className="container">
      <div className="baner">
        <h1>
          Cold music for <br />
          your mouth <br />
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h6>
        </h1>

        <img src="https://purepng.com/public/uploads/large/purepng.com-ice-creamice-creamcreamfrozensweet-1411527616051ymbwu.png"
          className="ba1"
        />
      
      </div>
      <div className="buy">
        <button type="submit" className="buy1"><span></span> buy now</button>
      </div>
    </section>
  );
}

export default Baner;
