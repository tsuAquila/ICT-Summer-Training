import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import "./AddEmployee.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddEmployee = () => {
  const { register, handleSubmit } = useForm(); //important
  const getData = (val) => {
    axios.post("https://reqres.in/api/users", val).then((response) => {
      console.log(response);
      console.log(val);
      alert(`POST Success!! POSTid = ${response.data.id}`);
    });
  };

  return (
    <div id="emp">
      <br />
      <Typography variant="h2">Add Employee</Typography>
      <Stack
        component="form"
        sx={{
          width: "25ch",
          marginLeft: "40%",
          marginTop: "50px",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="empName"
          {...register("empName")}
          variant="outlined"
          label="First Name"
          required
        />
        <TextField
          name="empLoc"
          {...register("empLoc")}
          variant="outlined"
          label="Last Name"
          required
        />
        <TextField
          name="empDesgn"
          {...register("empDesgn")}
          variant="outlined"
          label="Age"
          required
        />
        <br />
        <Button variant="contained" onClick={handleSubmit(getData)}>
          Submit
        </Button>
      </Stack>
    </div>
  );
};

export default AddEmployee;
