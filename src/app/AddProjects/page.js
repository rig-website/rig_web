'use client';

import { useState } from 'react';
import axios from 'axios';
import './styles.css';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const Page = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops form from being submitted in the default manner
    const formData = new FormData();
    formData.append('file', image);
    formData.append('text', text);

    try {
      const res = await axios.post('/api/content', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Response:', res.data);

      setText('');
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div>
              <label>Text:</label>
              <textarea
                value={text}
                onChange={(e) => {
                  console.log('Text changed:', e.target.value);
                  setText(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  console.log('Image selected:', e.target.files[0]);
                  setImage(e.target.files[0]);
                }}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Contact />
    </>
  );
};

export default Page;
