import {BsTrash } from "react-icons/bs";

const TodoSection = (props) => {
  return (
    <div className="d-flex flex-col justify-content-center ">
      <ol className="list-group list-group mt-4 w-75 ">
        <h5 className="mt-2">{props.title}</h5>
        {props.tasks.length === 0 ? (
          <p className="text-secondary text-center">No Tasks Avaliable</p>
        ) : (
          props.tasks.map((task, i) => {
            return (
              <li
                key={i}
                className={
                  (i === 0 ? "rounded-top " : "") +
                  "list-group-item d-flex align-item-center justify-content-between"
                }
              >
                <span className="text-secondary" style={{ fontSize: "12px" }}>
                  {task.deadline.toLocaleDateString()}
                </span>
                <span className="text-capitalize">{task.message}</span>
                
                <BsTrash
                  size={20}
                  color="red"
                  onClick={(e)=>{
                    props.deleteTask(task.id)
                  }}
                />
              </li>
            );
          })
        )}
      </ol>
    </div>
  );
};
export default TodoSection;
