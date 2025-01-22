"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from '@/app/styles/edit.module.css';

export default function EditForm({ id, title, description }) {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription) {
      alert("Title and description cannot be empty");
      return;
    }

    try {
      const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      const endpoint = `${baseURL}/api/projects/${id}`;
      
      const res = await axios.put(endpoint, {
        newTitle,
        newDescription,
      });

      console.log("API Response:", res.data);
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Error updating topic:", error.response?.data?.message || error.message);
      alert("Failed to update project");
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <h1 className={styles.title}>Edit Project</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>Title</label>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className={styles.input}
              type="text"
              placeholder="Topic Title"
            />
          </div>
          
          <div>
            <label className={styles.label}>Description</label>
            <input
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className={styles.input}
              type="text"
              placeholder="Topic Description"
            />
          </div>
          
          <button
            type="submit"
            className={styles.button}
          >
            Update Project
          </button>
        </form>
      </div>
    </div>
  );
}