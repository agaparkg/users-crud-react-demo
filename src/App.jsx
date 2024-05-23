import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <Header setLoggedIn={setLoggedIn} />
          <Users setLoggedIn={setLoggedIn} />
          <Footer />
        </>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
