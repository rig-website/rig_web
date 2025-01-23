'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './team.module.css';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';

const Team = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2021-2025");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [members, setMembers] = useState({
    name: "",
    linkedin: "",
    presentation: "",
    position: "",
  });

  useEffect(() => {
    fetchMembers();
  }, [selectedYear]);

  const fetchMembers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/team/${selectedYear}`);
      if (response.data.success) {
        setTeamMembers(response.data.data);
      } else {
        setTeamMembers([]);
        setError(response.data.message || "No team members found.");
      }
    } catch (err) {
      console.error("Error fetching team members:", err);
      setError(err.response?.data?.message || "Failed to fetch team members.");
      setTeamMembers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMembers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/team', {
        ...members,
        year: selectedYear,
      });

      if (response.data.success) {
        fetchMembers();
        setMembers({
          name: "",
          linkedin: "",
          presentation: "",
          position: "",
        });
      } else {
        setError(response.data.message || "Failed to add member.");
      }
    } catch (err) {
      console.error("Error adding team member:", err);
      setError(err.response?.data?.message || "Error occurred while adding.");
    } finally {
      setLoading(false);
    }
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <>
    <Navbar />
    <div className={styles.backbeam}>
      <div className={styles.heads}>
        <div className={styles.teamH}>Our Team</div>
      </div>

      <div className={styles.yearSelector}>
        <label htmlFor="year">Select Year: </label>
        <select
          id="year"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="2021-2025">2021-2025</option>
          <option value="2020-2024">2020-2024</option>
          <option value="2019-2023">2019-2023</option>
          <option value="Developers">Developers</option>
        </select>
      </div>

      {isLogin && (
  <form onSubmit={handleSubmit} className={styles.memberForm}>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={members.name}
      onChange={handleInputChange}
      required
    />
    <input
      type="url"
      name="linkedin"
      placeholder="LinkedIn URL"
      value={members.linkedin}
      onChange={handleInputChange}
      required
    />
    <input
      type="url"
      name="presentation"
      placeholder="Image URL"
      value={members.presentation}
      onChange={handleInputChange}
      required
    />
    <input
      type="text"
      name="position"
      placeholder="Position"
      value={members.position}
      onChange={handleInputChange}
      required
    />
    <button type="submit" disabled={loading}>
      {loading ? "Adding..." : "Add Member"}
    </button>
  </form>
)}

      {error && <div className={styles.error}>{error}</div>}

      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : teamMembers.length === 0 ? (
        <div className={styles.nomember}>No team members found</div>
      ) : (
        <div className={styles.members}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.member}>
             <Image
  src={member.presentation}
  alt={member.name}
  className={styles.photo}
  width={200}
  height={200}
  onError={(e) => {
    console.error('Image Load Failed:', {
      url: member.presentation,
      member: member
    });
  }}
  placeholder="blur"
  blurDataURL="/default-avatar.png"
/>
              <div className={styles.inData}>
                <p className={styles.name}>{member.name}</p>
                <p className={styles.position}>{member.position}</p>
                <div className={styles.icons}>
                  <p>{member.year}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.icon}
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Team;
