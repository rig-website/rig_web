'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import styles from "@/app/login/style.module.css"
import toast from "react-hot-toast";
import { login } from "@/redux/authSlice"; 

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    rigId: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      console.log('Attempting login...');
      const { data } = await axios.post("/api/login", {
        rigId: input.rigId,
        password: input.password,
      });
      console.log('Login response:', data);

      if (data.success) {
        console.log('Dispatching login action...');
        
        dispatch(login());
        
        
        setInput({
          rigId: "",
          password: "",
        });

        toast.success("Login successful!");
        
        router.push("/");
      } else {
        toast.error(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.content}>
          <div className={styles.one}>
            <label htmlFor="rigId">Rig-ID</label>
            <input
              className={styles.input}
              type="text"
              name="rigId"
              value={input.rigId}
              onChange={handleChange}
              placeholder="Enter your Rig-ID"
              required
              disabled={isLoading}
            />
          </div>
          <div className={styles.two}>
            <label htmlFor="password">Password</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>
          <div className={styles.links}>
            <button
              className={`${styles.bttn} ${isLoading ? styles.loading : ''}`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'LOGGING IN...' : 'SUBMIT'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;