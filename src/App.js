import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import backgroundImage from "./images/background1.jpg";
import backgroundImage1 from "./images/background2.jpg";
import "./App.css";

export default function App() {
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
	<div className="passage">
	<p>
	Full stack technology refers to the entire depth of a computer system application, and full stack developers straddle two separate web development domains: the front end and the back end.
    </p>
	</div>
      <div className="form-container">
        <div className="form-background"  style={{
          backgroundImage: `url(${backgroundImage1})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          borderRadius: "15px",
        }}>
        <div className="form">
          <h4 style={{fontsize: "15px",
		  color: "orange",padding: "2px"}}>Personal Information</h4>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Name" />
              <br></br>
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" />
              <br></br>
            </Form.Group>
            <Form.Group>
              <Form.Control type="number" placeholder="Age" />
              <br></br>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
	</div>
  );
}