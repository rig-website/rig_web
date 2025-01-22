'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';
import styles from "@/app/signup/style.module.css";

const Register = () => {
  const router = useRouter();
  const [input, setInputs] = useState({
    rigId: '',
    password: ''
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3000/api/register', {
        rigId: input.rigId,
        password: input.password
      });

      if (data.success) {
        toast.success('User registered successfully!');
        router.push('/login');
      } else {
        toast.error(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="wrapper">
      <div className="content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="one">
            <label htmlFor="rigId">RIG-ID</label>
            <input
              type="text"
              id="rigId"
              name="rigId"
              value={input.rigId}
              onChange={handleChange}
              className="input rigid"
              placeholder="Enter your RIG-ID"
              required
            />
          </div>
          <div className="two">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              className="input passkey"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="bttn">
            Submit
          </button>
          <button
            type="button"
            className="bttn"
            onClick={() => router.push('/login')}
          >
            Go to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
