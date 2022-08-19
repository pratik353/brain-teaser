import React from "react";
import { useNavigate } from "react-router";

const HelloPage = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    navigate('/')
  };
  return (
    <div>
      HelloPage
      <button onClick={logout}>LogOut</button>
    </div>
  );
};

export default HelloPage;
