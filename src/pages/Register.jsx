import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";

function Register() {
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
        Register
      </h3>
      &nbsp;&nbsp;&nbsp;
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormControl>
          <TextField type="text" variant="outlined" label="Enter First Name" />
          &nbsp;
          <TextField type="text" variant="outlined" label="Enter Last Name" />
          &nbsp;
          <TextField
            type="email"
            variant="outlined"
            label="Enter Email Address"
          />
          &nbsp;
        </FormControl>
      
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Button variant="contained" disableElevation>
          Register
        </Button>

      </div>
     
      <Footer />
    </>
  );
}

export default Register;
