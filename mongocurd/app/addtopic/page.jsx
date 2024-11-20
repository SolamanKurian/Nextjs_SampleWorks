"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please provide both a title and a description");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/topics", {
        title,
        description,
      });

      if (res.status === 201) {
        router.push("/");
      } else {
        throw new Error("Failed to add topic");
      }
    } catch (error) {
      console.error("Error adding topic:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add
      </button>
    </form>
  );
}
