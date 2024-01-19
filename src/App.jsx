import "./App.css";
import React, { useEffect, useState } from "react";
import UserTable from "./Components/UserTable";
import UserData from "./Components/UserData";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/memberdetails?populate=months", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    // <UserTable data={data} />
    <UserData data={data} />
  );
}

export default App;
