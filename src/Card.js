import React from "react";
const pix =  {
  width: "100px"
}

function Card(props) {
  return (
    <div className="card">
      <img style={pix} src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">Name: {props.empName.first} {props.empName.last} </h5>
        <p className="card-text">
          A proud employee of &#169; StraightOuttaLotion Web Development
        </p>
      </div>
      <ul className="list-group list-group-flush">
      
        <li className="list-group-item">Phone: {props.phoneNumber}</li>
        <li className="list-group-item">email: {props.email}</li>
        <li className="list-group-item">DOB: {props.dob}</li>
      </ul>
    </div>
  );
}

export default Card;
