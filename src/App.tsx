import styles from "./App.module.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Form />
      <div className={styles.wrapper}></div>
    </div>
  );
}
