import "./components/styles.css";

import { Header } from './components/Header/Header'
import { Article1 } from "./components/Article 1/Article1";
import { Article2 } from "./components/Article 2/Article2";
import { Article3 } from "./components/Article 3/Article3";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Article1 />
        <Article2 />
        <Article3 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
