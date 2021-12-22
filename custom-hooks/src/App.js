import { useEffect, useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (taskObj) => {
      let taskArray = [];
      for (const key in taskObj) {
        taskArray.push({
          id: key,
          text: taskObj[key].text,
        });
      }
      setTasks(taskArray);
    };
    fetchTasks(
      {
        url: "https://react-http-f7845-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);
  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return prevTasks.concat(task);
    });
  };
  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />
      {isLoading && <p>Loading...</p>}
      {!isLoading && <p>{error}</p>}
      {!isLoading && !error && <Tasks items={tasks} />}
    </div>
  );
}

export default App;
