import React from "react";

const styles = {
  background: "yellow",
  margin: "auto",
  border: "3px solid green",
  borderRadius: "10px",
  padding: "10px",
  textAlign: "center"

 
};

function Navbar() {
  return (
    <nav  className="navbar navbar-light bg-light">
      <div  className="container-fluid">
        <form style={styles} className="d-flex">
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
