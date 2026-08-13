"use client";

import { React, useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Enter title and content please!!");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        alert("Notes created successfully");
        setTitle("");
        setTitle("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-10">
      <div className="max-w-4xl mx-auto  text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-400 mb-2">My notes</h1>

          <p className="text-gray-400">
            Create,read,update, and delete your notes
          </p>
        </div>
        <div className="bg-amber-600/10 h-full w-full">
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col p-4  gap-6"
          >
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              className="text-indigo-200 py-2 px-2 rounded-2xl"
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              type="text"
              placeholder="Note details"
              value={content}
              rows="5"
              className="text-indigo-200  py-2 px-2 rounded-2xl"
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex gap-5">
              <button
                type="submit"
                disabled={isLoading}
                className="p-3 rounded-2xl bg-amber-200"
              >
                Add Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
