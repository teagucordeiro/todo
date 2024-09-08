import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Form.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormProps {
  onAddNewTask: (content: string) => void;
}

export function Form({ onAddNewTask }: FormProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleAddNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddNewTask(newTaskText);
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
