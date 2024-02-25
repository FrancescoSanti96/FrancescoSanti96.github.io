import React from 'react';
import Footer from "../../components/footer";

import image from "../../assets/img/me.jpg";

export default function Home() {
  return (
    <>
      {/* main page home */}
      <img src="../../img/me.jpg" alt="" />
      <div className="d-flex container mt-5 flex-column flex-md-row align-items-center">
        <div className="px-5">
          <img className="imageOfMe" src={image} alt="" />
        </div>
        <div className="px-5 textProfile mt-5 mt-md-0 fw-bold">
          Hello everyone 👋🏻. <br />
          I'm Francesco Santi 🦸🏻‍♂️ a Junior Developer at Flowing a Claranet Company.<br />
          This is my personal website made for fun made with react and love. 🤟️ <br />
          🚀️ 
        </div>
      </div>
      <Footer />
    </>
  );
}
