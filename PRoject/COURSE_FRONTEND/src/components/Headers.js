import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
  return (
    <Card
      className="my-3 shadow-lg border-0"
      style={{
        background: "linear-gradient(145deg, #d4d4d4, #ffffff)", // shiny gray gradient
        borderRadius: "20px",
        boxShadow: "5px 5px 15px #bfbfbf, -5px -5px 15px #ffffff", // soft 3D shadow
      }}
    >
      <CardBody className="text-center py-5">
        <h1
          style={{
            color: "#000000", // black text
            fontWeight: "700",
            letterSpacing: "1px",
            textShadow: "2px 2px 5px rgba(0,0,0,0.1)", // soft 3D text effect
            fontSize: "2.5rem",
          }}
        >
          Welcome To My Course Application
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#222222",
            textShadow: "1px 1px 3px rgba(0,0,0,0.08)",
          }}
        >
          Learn | Code | Build | Grow
        </p>
      </CardBody>
    </Card>
  );
}

export default Header;
