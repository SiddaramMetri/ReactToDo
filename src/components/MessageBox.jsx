const MessageBox = (props) => {
  return (
    <>
      <input
        className="form-control w-50"
        type="text"
        placeholder="Enter Your Task"
        aria-label="Enter Message"
        value={props.taskMessage}
        onChange={(e) => {
          props.setTaskMessage(e.target.value);
        }}
      />
    </>
  );
};

export default MessageBox;
