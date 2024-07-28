'use client'
import { useState, useEffect } from 'react';
import React from 'react';
import Navbar from "../components/Navbar";
import Link from 'next/link';
import axios from 'axios';
import './styles.css'; 

function Page() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await axios.get('/api/content');
      setContent(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
   <>
   <Navbar/>
    <div className="page-container">
    
    <Link href="/AddProjects">
      <button className="add-projects-button">ADD PROJECTS</button>
    </Link>
    <div className="content-container">
      {content.map((item, index) => (
        <div key={index} className="content-item">
          <p>{item.text}</p>
          {item.imageurl && <img src={item.imageurl} alt="uploaded" />}
        </div>
      ))}
    </div>
  </div>
   
   </>
  );
}

export default Page;
