import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Users />
      <Footer />
    </>
  );
}

export default App;
