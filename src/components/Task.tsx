import { task } from "../App";
import styles from "./Task.module.css";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";

interface TaskProps {
  task: task;
  onToggleTaskStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onToggleTaskStatus, onDeleteTask }: TaskProps) {
  function handleToggleTaskStatus() {
    onToggleTaskStatus(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.container}>
      <button onClick={handleToggleTaskStatus} className={styles.checkButton}>
        {task.checked ? (
          <CheckCircle weight="fill" size={18} />
        ) : (
          <Circle weight="duotone" size={18} />
        )}
      </button>
      <p className={task.checked ? styles.contentWithLine : styles.content}>
        {task.content}
      </p>
      <button onClick={handleDeleteTask} className={styles.deleteButton}>
        <Trash size={18} />
      </button>
    </div>
  );
}
