import React from "react";
import Alert from "react-bootstrap/Alert";

function Todo(props) {
  return (
    <div>
      <Alert key="primary" variant="primary">
        {props.data}
      </Alert>
    </div>
  );
}

export default Todo;
