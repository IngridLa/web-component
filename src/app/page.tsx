import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button />
    </div>
  );
}
