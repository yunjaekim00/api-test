"use client";

import { useEffect, useState } from "react";

function HelloWorldComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch the 'hello world' message from your API
    async function fetchMessage() {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setMessage(data.message);
    }

    fetchMessage();
  }, []);

  //return <div>{message}</div>;
  return message;
}

export default HelloWorldComponent;
