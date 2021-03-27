import { useState } from "react";

export interface LogFormProps {}

const LogForm: React.FC<LogFormProps> = () => {
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
      <label>
        Date
        <input type="text" name="date" id="date" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LogForm;
