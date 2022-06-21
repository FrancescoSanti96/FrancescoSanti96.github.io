
// import { CameraIcon, PencilIcon, StarIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

import image from "../../img/me.jpg"

export default function Home() {
  const navigate = useNavigate();

  return (
    <>

{/* main page home */}
<img src="../../img/me.jpg" alt="" />
<div className="d-flex container mt-5 flex-column flex-md-row align-items-center">
    <div className="px-5">
      <img className="imageOfMe" src={image} alt=""/>
    </div>
    <div className="px-5 textProfile mt-5 mt-md-0">
     Hello, my name is Francesco Santi  and I'm a future Dev 👨‍💻️ <br></br>
     This is my personal website made for fun made with react and love 🤟️<br></br>
     Become a software developer is my dream and now it's time to take my dream to reality.🚀️ <br></br>
    </div>
</div>

{/* footer */}
<ul className="nav position-absolute bottom-0 start-50 translate-middle-x">
<li className="nav-item">
    <a className="nav-link" href="#"><i className="bi bi-github icon"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><i className="bi bi-linkedin icon"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><i className="bi bi-file-earmark-person icon"></i></a>
  </li>
</ul>
    </>
  );
}
