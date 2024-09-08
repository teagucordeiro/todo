import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import { Counter } from "./components/Counter";
import { EmptyState } from "./components/EmptyState";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import "./global.css";

export interface task {
  content: string;
  id: string;
  checked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<task[]>([]);

  const finishedTasks = tasks.reduce(function (accumulator, task) {
    if (task.checked === true) {
      accumulator++;
    }
    return accumulator;
  }, 0);

  function addTask(content: string) {
    const newTask = {
      id: uuidv4(),
      content: content,
      checked: false,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutDeletedOne);
  }

  function toggleTaskStatus(id: string) {
    const tasksWithUptadedOne = tasks.map((task) => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      return task;
    });

    setTasks(tasksWithUptadedOne);
  }

  return (
    <div>
      <Header />
      <Form onAddNewTask={addTask} />
      <div className={styles.wrapper}>
        <Counter createdTasksNumber={tasks.length} finishedTasksNumber={finishedTasks} />
        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleTaskStatus={toggleTaskStatus}
              onDeleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}
