




import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Userlist.css";

const UserCard = ({ user, followUser, unfollowUser }) => {
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);

  const handleFollowButtonClick = () => {
    if (isFollowing) {
      unfollowUser(user._id);
    } else {
      followUser(user._id);
    }
    setIsFollowing((prevFollowing) => !prevFollowing);
  };

  return (
    <div className="user-card">
      <div className="user-info">
        <p className="user-name">{user.name}</p>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"  className="user-profile-picture" alt="Profile Picture" />
        {/* <p className="user-name"><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/></p> */}
        {/* <p className="user-email">{user.email}</p> */}
      </div>
      <div className="user-actions">
        <button
          className={`follow-button ${isFollowing ? "unfollow" : "follow"}`}
          onClick={handleFollowButtonClick}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user list from backend using the JWT token from local storage
    fetch("/userlist", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const followUser = (userId) => {
    axios
      .put(`/follow/${userId}`, null, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((response) => {
        // Update the user's isFollowing status in the local state
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, isFollowing: true } : user
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const unfollowUser = (userId) => {
    axios
      .put(`/unfollow/${userId}`, null, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((response) => {
        // Update the user's isFollowing status in the local state
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, isFollowing: false } : user
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="user-list-container">
      <h1>Suggested for you</h1>
      <div className="user-cards-container">
        <div className="scrollable-user-list">
          {users.map((user) => (
            <UserCard
              key={user._id}
              className="user-card"
              user={user}
              followUser={followUser}
              unfollowUser={unfollowUser}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



export default UserList;