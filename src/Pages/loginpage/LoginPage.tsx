import React, { useState } from "react";
import { useNavigate } from "react-router";
import style from "./loginpage.module.css";

type formData = {
  email: string;
  password: string;
};

export const LoginPage: React.FunctionComponent<formData> = (formData) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [isLogged, setIslogged] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(email , '   ', password);
    
    if (email === "pratikkamble112@gmail.com" && password === "pratik@123" ) {
        const auth = localStorage.setItem('loggedData', JSON.stringify({email, password}))
        navigate('/home')
    }
  };
  return (
    <div>
      <h2>Login Here</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
