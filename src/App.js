import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/main.css";
import { ApplicationProvider } from "./context";

function App() {
  return (
    <div className="App">
      <ApplicationProvider>
        <Header />
        <Home />
        <Footer />
      </ApplicationProvider>
    </div>
  );
}

export default App;
