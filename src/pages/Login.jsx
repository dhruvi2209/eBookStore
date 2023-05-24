import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductPage from "./ProductPage";


function Login() {

  const navigate = useNavigate();
  const navigateToProductPage = () => {
    navigate("/ProductPage");
  };
  return (
    <>
      <Header />
      &nbsp;&nbsp;&nbsp; 
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Login to eBookStore
      </h3>&nbsp;&nbsp;&nbsp;
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
           
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TextField id="outlined-login" label="login" />
          <TextField id="outlined-password" label="Password" />
        </div>&nbsp;&nbsp;&nbsp;&nbsp;
      </Box>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Button variant="contained" size="large" onClick={navigateToProductPage}>Log in</Button> &nbsp;
      </div>
      <Footer />
    </>
  );
}

export default Login;
