import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <h2 className="profile-title">My Profile</h2>

        <div className="profile-card">
          <div className="profile-info">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h3>Christian Alfaro</h3>
              <p><strong>Email:</strong> christian@email.com</p>
              <p><strong>User Type:</strong> Estudiante</p>
              <p><strong>Location:</strong> San Salvador, El Salvador</p>
              <p><strong>Member since:</strong> Jan 2025</p>
            </div>
          </div>
          <div className="edit-button-container">
            <button className="edit-button">Edit</button>
          </div>
        </div>

        <div className="energy-status-card">
          <h3>Energy Recommendation</h3>
          <p><strong>Type:</strong> Solar & Wind</p>
          <p><strong>Last Scan:</strong> June 18, 2025 (Green Valley)</p>
          <p><strong>Estimated Monthly Savings:</strong> $42.50</p>
          <button className="action-button">View Analysis</button>
        </div>

        <div className="quick-actions">
          <button className="action-button">Request New Scan</button>
          <button className="action-button">View Reports</button>
          <button
            className="logout-button"
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/');
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

