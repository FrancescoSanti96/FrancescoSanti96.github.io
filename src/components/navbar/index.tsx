function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          {/* TODO inserire ester egg */}
          <a className="navbar-brand">
            <i className="bi bi-code"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">AboutMe</a>
              </li>
            </ul>
            <i className="bi bi-code-slash"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
