import DatePicker from "./components/DatePicker";
import MessageBox from "./components/MessageBox";
import { AiFillPlusSquare } from "react-icons/ai";
import TodoSection from "./components/TodoSection";
import { useState } from "react";

const App = () => {
  const [taskMessage, setTaskMessage] = useState("");

  const [taskDate, setTaskDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => {
        return task.id !== id;
      });
    });
  };

  return (
    <div className="container mt-4 item-center">
      <div className="d-flex flex-row gap-3 justify-content-center">
        <MessageBox
          taskMessage={taskMessage}
          setTaskMessage={setTaskMessage}
          fun={fun}
        />

        <DatePicker taskDate={taskDate} setTaskDate={setTaskDate} />

        <button
          className="border-0 bg-white"
          onClick={(e) => {
            if (!taskDate || !taskMessage) {
              return;
            }
            setTasks((prev) => {
              return [
                ...prev,
                {
                  id: new Date(),
                  deadline: new Date(taskDate),
                  message: taskMessage,
                },
              ];
            });
            setTaskDate(new Date().toISOString().slice(0, 10));
            setTaskMessage("");
          }}
        >
          <AiFillPlusSquare size={40} className="text-primary" />
        </button>
      </div>
      <div>
        <TodoSection
          title="OverDue"
          tasks={tasks.filter((task) => {
            return task.deadline < new Date(new Date().toDateString());
          })}
          deleteTask={deleteTask}
        />

        <TodoSection
          title="Today"
          tasks={tasks.filter((task) => {
            return task.deadline.toDateString() == new Date().toDateString();
          })}
          deleteTask={deleteTask}
        />

        <TodoSection
          title="Upcomming"
          tasks={tasks.filter((task) => {
            return task.deadline > new Date();
          })}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
