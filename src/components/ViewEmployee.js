import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "./ViewEmployee.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewEmployee = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      setValue(response.data.users);
    });
  }, []);

  return (
    <div className="emps">
      <Typography variant="h3">View Employee Details</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>First Name</h2>
            </TableCell>
            <TableCell>
              <h2>Last Name</h2>
            </TableCell>
            <TableCell>
              <h2>Age</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((data, i) => {
            return (
              <TableRow key={i}>
                <TableCell>{data.firstName}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell>{data.age}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewEmployee;
