import React from "react";

const styles = {
  background: "light green",
  justifyContent: "center",
};

function Navbar() {
  return (
    <nav style={styles} className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
