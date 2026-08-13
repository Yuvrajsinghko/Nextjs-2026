"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    try {
      const res = await fetch("/api/notes");
      return await res.json();
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const refreshNotes = async () => {
    const nextNotes = await loadNotes();
    setNotes(nextNotes);
  };

  useEffect(() => {
    let ignore = false;

    loadNotes().then((nextNotes) => {
      if (!ignore) {
        setNotes(nextNotes);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  const handleEdit = () => {

  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure")) return;

    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        refreshNotes();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        setContent("");
        refreshNotes();
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
        <div className="grid mt-5 grid-cols-1 md:grid-cols-2 gap-6">
          {notes.length === 0 ? (
            <p className="text-2xl text-amber-100">No notes created yet</p>
          ) : (
            notes.map((note) => (
              <div
                key={note._id}
                className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800"
              >
                <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                  {note.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {note.content}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(note.createdAt).toLocaleDateString()}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(note)}
                    className="flex-1 bg-yellow-500 text-gray-900 py-1 px-3 rounded hover:bg-yellow-600 transition text-sm font-semibold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="flex-1 bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition text-sm font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
