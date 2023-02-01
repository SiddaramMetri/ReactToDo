import { useState } from "react";

const DatePicker = () => {
  const [taskDate, setTaskDate] = useState("");
  return (
    <>
      <input
        className="form-control w-25"
        type="date"
        placeholder="Enter Your Task"
        aria-label="Enter Message"
        value={taskDate}
        onChange={(e) => {
            setTaskDate(e.target.value);
        }}
      />
    </>
  );
};

export default DatePicker
