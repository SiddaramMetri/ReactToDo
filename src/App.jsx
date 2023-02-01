import DatePicker from "./components/DatePicker";
import MessageBox from "./components/MessageBox";
import { AiFillPlusSquare, AiFillDelete } from "react-icons/ai";

const App = () => {
  return (
    <div className="container mt-4 item-center">
      <div className="d-flex flex-row gap-3 justify-content-center">
        <MessageBox />
        <DatePicker />
        <AiFillPlusSquare size={40} className="text-primary" />
      </div>
      <div className="d-flex flex-col justify-content-center ">
        <ol className="list-group list-group mt-4 w-75 ">
          <h5 className="mt-2">OverDue:</h5>
          <li className="list-group-item mb-2 rounded-top d-flex align-item-center justify-content-between">
            <span className="text-secondary" style={{fontSize:"12px"}} >{new Date().toDateString()}</span>
            <span className="text-capitalize">first task</span>
            <AiFillDelete size={20} color="red" className="border rounded " />
          </li>
          <li className="list-group-item">A list item</li>
          <li className="list-group-item">A list item</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
