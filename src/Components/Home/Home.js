import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="mainHome">
      <h1 className="heading">Welcome to ToDoList App</h1>
      <Button
        variant="primary"
        className="btn1"
        onClick={() => {
          navigate("/Main");
        }}
      >
        Get Started
      </Button>{" "}
    </div>
  );
}

export default Home;
