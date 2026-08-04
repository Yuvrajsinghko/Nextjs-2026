"use client";

import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [message,setMessage]=useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        completed: false,
      }),
    });
    const data = await res.json();

    if(data.success){
      setMessage("Todo Created"+data.todo.title)
    }
    else{
      setMessage("Failed to create todo")
    }
  };
  return (
    <div className="flex h-screen flex-col justify-center items-center gap-4">
      <h2>Create Todo</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          value={title}
          placeholder="Yout to do title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {
        message && <p>{message}</p>
      }
    </div>
  );
};

export default Home;
