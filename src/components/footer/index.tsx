import React from 'react';
// Component used in the view home for render 3 icons on the bottom of the page like a footer

// For import pdf in react with typescript is necessary install 'npm i @types/react-pdf' a specific types and declare a custom types on a specific file in this case react-app-env.d.ts
import curriculum from "../../documents/test.pdf";

function Footer() {
  return (
    <>
    {/* For the position in absolute on the bottom and center of the page */}
      <ul className="nav position-absolute bottom-0 start-50 translate-middle-x">
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/FrancescoSanti96">
            <i className="bi bi-github icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/francesco-santi-552121115/">
            <i className="bi bi-linkedin icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={curriculum}>
            <i className="bi bi-file-earmark-person icon"></i>
          </a>
        </li>
      </ul>
    </>
  );
}
export default Footer;
