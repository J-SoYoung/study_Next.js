import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const name = "jung";
  return (
    <>
      <div className="title-box">
        <h1 className="title">CODING FRESH</h1>
        <h4 className="title-sub">develop-{name}</h4>
      </div>
    </>
  );
}
