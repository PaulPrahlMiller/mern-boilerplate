import { useState, useEffect } from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchFromApi = () => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    };
    fetchFromApi();
  }, [message]);

  return (
    <div className="App">
      <Welcome message={message} />
    </div>
  );
}

export default App;
