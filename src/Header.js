import React from "react";

const styles = {
  background: "green",
  textAlign: "center",
  margin: "auto",
  border: "3px solid green",
  borderRadius: "10px",
  padding: "10px",
};

function Header() {
  return (
    <div style={styles}>
      <h1>Employee Directory</h1>
    </div>
  );
}

export default Header;
