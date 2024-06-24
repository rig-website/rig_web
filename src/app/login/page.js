'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import styles from "@/app/signup/style.module.css"
import Link from 'next/link';
import axios from 'axios';

export default function LoginPage() {
    const router = useRouter(); // Use useRouter from next/navigation
    const [user, setUser] = useState({
        rigid: "",
        email: "",
        passkey: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true); // Initially true to prevent immediate signup
    const [loading, setLoading] = useState(false);

    const onlogin = async () => {
        try {
            const response = await axios.post('/api/login',user)
            if (response.status === 201) {
                console.log("Signup Success");
                
            } else {
                console.log("login failed");
            }
            
        } catch (error) {
            console.log("login failed");
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.rigid.length > 0 && user.email.length > 0 && user.passkey.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className={styles.wrapper}>
            <h1>{loading ? "Processing" : "LOGIN"}</h1>

            
           <div className={styles.content}>
            <div className={styles.one}>
                <label htmlFor="rigid">RIG-id</label>
                <input
                    className={styles.rigid}
                    value={user.rigid}
                    onChange={(e) => setUser({ ...user, rigid: e.target.value })}
                    placeholder='RIG ID'
                    type="text"
                />
            </div>
            <div className={styles.two}>
                <label htmlFor="email">Email</label>
                <input
                    className={styles.email}
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder='Email'
                    type="email"
                />
            </div>
            <div className={styles.three}>
                <label htmlFor="passkey">Passkey</label>
                <input
                    className={styles.passkey}
                    value={user.passkey}
                    onChange={(e) => setUser({ ...user, passkey: e.target.value })}
                    placeholder='Passkey'
                    type="password"
                />
            </div>
           </div>
            <div className={styles.links}>
            <button className={styles.bttn} onClick={onlogin} >
                Login
            </button>
            </div>
        </div>
    );
}
