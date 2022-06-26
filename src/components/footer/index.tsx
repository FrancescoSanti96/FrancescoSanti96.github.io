import curriculum from "../../documents/test.pdf";

function Footer() {
  return (
    <>
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
