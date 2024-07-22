/* eslint-disable react/prop-types */

const NavBar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary text-center"
      data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className="badge text-dark bg-light fs-5">News Mag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" role="button">
              <span
                className="nav-link text-light"
                onClick={() => setCategory("business")}>
                business
              </span>
            </li>
            <li className="nav-item" role="button">
              <span
                className="nav-link text-light"
                onClick={() => setCategory("sports")}>
                sports
              </span>
            </li>
            <li className="nav-item" role="button">
              <span
                className="nav-link text-light"
                onClick={() => setCategory("technology")}>
                technology
              </span>
            </li>
            <li className="nav-item" role="button">
              <span
                className="nav-link text-light"
                onClick={() => setCategory("health")}>
                health
              </span>
            </li>
            <li className="nav-item" role="button">
              <span
                className="nav-link text-light"
                onClick={() => setCategory("science")}>
                science
              </span>
            </li>
            <li className="nav-item" role="button">
              <span
                className="nav-link text-light"
                onClick={() => setCategory("entertainment")}>
                entertainment
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
