import React from "react";
import { auth, provider } from "../../Utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signOut(auth);
      alert("registered");
      setInterval(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      alert(err);
    }
  };

  const siginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("register");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <Navbar />
      <div
        className="mx-auto flex items-center justify-center"
        style={{ height: "85vh", border: "solid" }}
      >
        <div
          style={{
            border: "solid",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50vh",
          }}
          className="rounded-xl"
        >
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Sign In</h1>
          <input
            type="text"
            style={{
              border: "solid",
              marginBottom: "10px",
              width: "80%",
              padding: "8px",
            }}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            style={{
              border: "solid",
              marginBottom: "10px",
              width: "80%",
              padding: "8px",
            }}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            style={{
              border: "solid",
              marginBottom: "10px",
              width: "80%",
              padding: "8px",
            }}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            style={{
              width: "50%",
              padding: "10px",
              cursor: "pointer",
            }}
            className=" bg-black text-white"
            onClick={register}
          >
            Register
          </button>
          <p>or</p>
          <p>Signup With</p>
          <button onClick={siginWithGoogle}>Google</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
