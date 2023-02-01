import { useState } from "react";

export default () => {
  const [taskMessage, setTaskMessage] = useState("");
  return (
    <>
      <input
        className="form-control w-50"
        type="text"
        placeholder="Enter Your Task"
        aria-label="Enter Message"
        value={taskMessage}
        onChange={(e) => {
          setTaskMessage(e.target.value);
        }}
      />
    </>
  );
};
