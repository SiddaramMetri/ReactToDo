const DatePicker = (props) => {
  return (
    <>
      <input
        className="form-control w-25"
        type="date"
        placeholder="Enter Your Task"
        aria-label="Enter Message"
        value={props.taskDate}
        onChange={(e) => {
          props.setTaskDate(e.target.value);
        }}
      />
    </>
  );
};

export default DatePicker;
