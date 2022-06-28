import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

import image from "../../img/me.jpg";

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
          Hello, my name is Francesco Santi and I'm a future Dev. 👨‍💻️ <br />
          This is my personal website made for fun made with react and love. 🤟️{" "}
          <br />
          Become a software developer is my dream and now it's time to take my
          dream to reality.🚀️ <br />
        </div>
      </div>
      <Footer />
    </>
  );
}
