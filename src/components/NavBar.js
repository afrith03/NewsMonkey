import { Link } from "react-router-dom";

const NavBar = ({ darkMode, setDarkMode }) => {
  // const isDarkModeOn = darkMode ? "black" : "white"

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#ffffff" : "#261132";
    document.body.style.color = darkMode ? "black" : "#BFC0C0";
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
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
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch `}>
            <input
              className="form-check-input"
              onClick={toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label text-light"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
