import React from 'react';

const NavBar = ({ setCategory }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">NewsMeg</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {['technology', 'business', 'health', 'sports', 'entertainment'].map((category) => (
                <li className="nav-item" key={category}>
                  <div
                    className="nav-link"
                    onClick={() => setCategory(category)}
                    style={{
                      transition: 'all 0.1s ease-in-out',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#ffc107'; // Yellow on hover
                      e.target.style.transform = 'scale(1.3)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
