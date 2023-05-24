import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddToCart from "./AddToCart";
import { favicon } from "../assets/images";
import { Button } from "@mui/material";
import Typography from "@mui/material";
import Login from "./Login";
function HomePage() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/Login");
  };
  const navigateToRegister = () => {
    navigate("/Register");
  };
  return (
    <>
      <Header />
      &nbsp;&nbsp;
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "orange",
        }}
      >
        Welcome! to eBookStore
      </h1>
      &nbsp;
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Log in or Register
      </h3>{" "}
      &nbsp;
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" size="large" onClick={navigateToLogin}>
          Log in
        </Button>{" "}
        &nbsp;
        <Button variant="outlined" size="large" onClick={navigateToRegister}>
          Register
        </Button>
      </div>
      <Footer />
    </>
  );
}
export default HomePage;
