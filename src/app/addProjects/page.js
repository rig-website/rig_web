'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import styles from '@/app/addEvents/style.module.css';

const Page = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
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
      const { data } = await axios.post('/api/projects/add-projects', {
        title: inputs.title,
        description: inputs.description,
      });
      if (data?.success) {
        toast.success('Event added');
        router.push('/Projects');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to add event');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.container}>
        <h2 className={styles.title}>Add Projects</h2>
        <label className={styles.label} htmlFor="title">
          Project Name
        </label>
        <input
          className={styles.input}
          type="text"
          id="title"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          required
        />
        <label className={styles.label} htmlFor="description">
          Project-Description
        </label>
        <textarea
          className={styles.textarea}
          id="description"
          name="description"
          value={inputs.description}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Page;
