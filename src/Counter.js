import { useState } from "react";

function Counter(props) {
  return (
    <div
      className="d-inline-flex p-2 bd-highlight"
      className="d-flex justify-content-center"
    >
      <button
        className="btn btn-warning"
        type="button"
        style={{ marginRight: "35px" }}
      >
        {props.number}
      </button>
      <div className="d-grid gap-2 d-md-block">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={props.onAdd}
        >
          +
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={props.onDecrease}
          disabled={props.number === 0}
        >
          _
        </button>
      </div>
      <div className="d-grid gap-2 d-md-block">
        <button
          className="btn btn-danger"
          type="button"
          style={{ marginLeft: "35px" }}
        >
          delete
        </button>
      </div>
    </div>
  );
}
export default Counter;
