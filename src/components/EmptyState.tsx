import styles from "./EmptyState.module.css";
import Clipboard from "/src/assets/clipboard.svg";

export function EmptyState() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="Clipboard icon" />
      <p>
        Você ainda não tem tarefas cadastradas <br />
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
}
