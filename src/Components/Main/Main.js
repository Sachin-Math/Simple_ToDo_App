import React, { useState } from "react";
import "./Main.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Todo from "../Todo/Todo";

function Main() {
  const [items, setItems] = useState(["go to class", "study", "clean house"]);
  const [item, setItem] = useState();
  const addItem = (item1) => {
    const newItems = [...items, item1];
    setItems(newItems);
  };
  return (
    <div className="main">
      <h1 className="mainHeading">What is on the calender today</h1>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
        className="inputMain"
      >
        <TextField
          fullWidth
          label="Add your items"
          id="fullWidth"
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      </Box>
      <Button
        variant="contained"
        style={{ position: "absolute", top: "40%", left: "60%" }}
        onClick={() => {
          addItem(item);
        }}
      >
        Add
      </Button>
      );
      <div className="items">
        {items.map((item) => {
          return <Todo data={item} />;
        })}
      </div>
    </div>
  );
}

export default Main;
