import styles from "./App.module.css";
import { Counter } from "./components/Counter";
import { EmptyState } from "./components/EmptyState";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Form />
      <div className={styles.wrapper}>
        <Counter createdTasksNumber={0} finishedTasksNumber={0} />
        <EmptyState />
      </div>
    </div>
  );
}
