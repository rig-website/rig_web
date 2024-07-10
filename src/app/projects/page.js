'use client'
import { useState,useEffect } from 'react';
import React from 'react'
import Navbar from "../components/Navbar"
import Link from 'next/link';


function page() {
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

        <div >
            <Navbar />
           
            <Link href="/AddProjects">
            <button>ADD PROJECTS</button>
           
            </Link>
            <div>
                {content.map((item,index)=>(
                    <div kev={index}>
                        <p>{item.text}</p>
                       {item.imageurl && <img src={item.imageurl} alt="uploaded" />}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default page