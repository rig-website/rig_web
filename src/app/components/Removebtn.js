"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

        const res = await axios.delete(`${baseURL}/api/projects/${id}`);

        if (res.status === 200) {
          router.refresh();
        } else {
          console.error("Failed to delete:", res.data?.error || "Unknown error");
          alert("Failed to delete the topic");
        }
      } catch (error) {
        console.error("Network error:", error.response?.data?.message || error.message);
        alert("Network error: Could not connect to the server.");
      }
    }
  };

  return (
    <button
      onClick={removeTopic}
      className="text-red-400"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
}