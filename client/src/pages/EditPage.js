import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { register } from "../JS/actions/user";

const EditPage = ({ history }) => {
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  return (
    <div className="edit-page">
      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        type="email"
        name="email"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        onChange={handleChange}
      />
      <TextField
        id="outlined-number"
        label="Number"
        name="phone"
        type="number"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        onClick={() => dispatch(register(newUser, history))}
        style={{ fontSize: "18px" }}
      >
        Add
      </Button>
    </div>
  );
};

export default EditPage;
