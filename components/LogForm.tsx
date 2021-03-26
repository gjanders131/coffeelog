import React, { useState } from "react";

export default function LogForm() {
  const [coffeeName, setCoffeeName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCoffeeName(e.target.value);
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Coffee Name
        <input type="text" name="coffeeName" id="coffeName" />
        {coffeeName}
      </label>
    </form>
  );
}
