// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="App">
      {data.map((index) => (
        <h1 key={index.id}>{index.attributes.name}</h1>
      ))}
    </div>
  );
}

export default App;
