import HomePage from "./View/HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">

      <HomePage />
  
    </div>
  );
}

export default App;
