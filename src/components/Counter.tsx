import styles from "./Counter.module.css";

interface CounterProps {
  createdTasksNumber: number;
  finishedTasksNumber: number;
}

export function Counter({
  createdTasksNumber,
  finishedTasksNumber,
}: CounterProps) {
  return (
    <div className={styles.counterContainer}>
      <p className={styles.createdTasks}>
        Tarefas criadas{" "}
        <span className={styles.counter}>{createdTasksNumber}</span>
      </p>
      <p className={styles.finishedTasks}>
        Tarefas concluídas <span className={styles.counter}>{finishedTasksNumber}</span>
      </p>
    </div>
  );
}
