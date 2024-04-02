import "./App.css";
import Event from "./components/event/Event";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Voice from "./components/voiceofcse/Voice";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Event></Event>
      <Voice></Voice>
      <Footer></Footer>
    </>
  );
}

export default App;
