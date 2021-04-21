import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Name: {props.empName}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Role: {props.role}</li>
        <li className="list-group-item">Phone: {props.phoneNumber}</li>
        <li className="list-group-item">email: {props.email}</li>
      </ul>
    </div>
  );
}

export default Card;
