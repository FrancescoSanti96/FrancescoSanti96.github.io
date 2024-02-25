import React from 'react';
import imageMaggie1 from "../../assets/img/maggie.jpg";
import imageMaggie2 from "../../assets/img/maggieOcchiali.jpg";
import meAndMaggie from "../../assets/img/meAndMaggie.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="container">
        {/* carousel */}
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade mt-2 border border-3"
          data-bs-ride="carousel"
          // Set the dimension of the slider 
          style={{ width: "80%", margin: "auto" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={imageMaggie1}
                className="d-block"
                alt="..."
                // Set the dimension of the image of the carousel
                style={{ maxHeight: 450, width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={imageMaggie2}
                className="d-block"
                alt="..."
                style={{ maxHeight: 450, width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={meAndMaggie}
                className="d-block"
                alt="..."
                style={{ maxHeight: 450, width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* other */}

        <button
          className="btn btn-secondary d-block m-auto mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          Other thinghs that i love: 🔍️
        </button>

        <div style={{ minHeight: 120 }}>
          <div className="collapse" id="collapseWidthExample">
            <div className="card card-body m-auto" style={{ width: 300 }}>
              <ul className="list-group">
                <li className="list-group-item">Camping 🏕️</li>
                <li className="list-group-item">Montains⛰️</li>
                <li className="list-group-item">Look for Porcini 🍄️</li>
                <li className="list-group-item">Sport 💪️</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
