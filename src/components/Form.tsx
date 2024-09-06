import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Form.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

export function Form() {
  const [newTaskText, setNewTaskText] = useState("");

  function handleAddNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(newTaskText);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  return (
    <form onSubmit={handleAddNewTask} className={styles.formTask}>
      <input
        onChange={handleNewTaskChange}
        type="text"
        name="task"
        value={newTaskText}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        <p>Criar</p>
        <PlusCircle size={32} />
      </button>
    </form>
  );
}
