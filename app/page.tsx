import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { About } from "./components/main/about/About";
import { Hero } from "./components/main/hero/Hero";
import { Numbers } from "./components/main/numbers/Numbers";
import { PastTransactions } from "./components/main/past-transactions/PastTransactions";
import { Rates } from "./components/main/rates/Rates";
import { Questions } from "./components/questions/Questions";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <Header></Header>
        <main>
          <Hero></Hero>
          <Numbers></Numbers>
          <PastTransactions></PastTransactions>
          <About></About>
          <Rates></Rates>
          <Questions></Questions>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}
