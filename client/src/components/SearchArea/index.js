import React, { useState } from "react";
import "./style.css";

export default function Input(props) {  
  const [value, setValue] = useState("")

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="col-md-12">
      <div className="search-area">
        <h2 className="p10">Book Search 👓</h2>
        <form>
          <div className="form-group">
      
            <div className="input-group mb-3 p10">
              <input type="text" className="form-control" placeholder="Book Title" aria-label="Book name" aria-describedby="name-of-book"
              value={value}
              onChange={
                (event) => {
                handleChange(event);
                props.setSearch(event.target.value);
                }
              }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

