import ClientComponent from "./client-component";
import styles from "./page.module.css";
import ServerComponent from "./server-component";

export default function Home() {
  console.log("홈실행");
  return (
    <div className={styles.page}>
      인덱스페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}