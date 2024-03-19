import React from "react";
import Navbar from "./Navbar";
import "./Stylings/Home.css";
import { useTheme } from "./ThemeContext";
import Kitchen from "./Images/Kitchen.jpg";
import { useEffect, useState } from "react";

const Home = () => {
  const { theme } = useTheme();
  const dividerWords = ["test", "test2", "test3"];
  const [word, SetWord] = useState(0);
  const [data, setData] = useState(null);
  const [foods, setFoods] = useState([]);

  const URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const js = await res.json();
        setData(js.meals[0]);

        return data;
      } catch (err) {
        console.log(err);
      }
    };

    const getFood = async () => {
      const foodser = [];
      for (let i = 0; i < 3; i++) {
        const food = await fetchData();
        foodser.push(food);
      }
      setFoods((prevFoods) => [...prevFoods, foodser]);
    };

    getFood();

    if (foods.length != 0) {
      console.log(foods);
    }

    const interval = setInterval(() => {
      SetWord((prevWord) => (prevWord + 1) % dividerWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          height: "75vh",
          position: "relative",
        }}
      >
        <div
          className="text-center"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 class="text-7xl font-bold">
            <span id="typing-animation" class="inline-block">
              {" "}
              Unleash Culinary Creativity Today
            </span>
          </h1>
        </div>
        <img
          src={Kitchen}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensure the image covers the entire container
          }}
          alt="Kitchen"
        />
        <div className="bg-gray-200  flex items-center justify-center h-20 ">
          <h3>{dividerWords[word]}</h3>
        </div>
        <div className="grid grid-cols-3 justify-center">
          <div style={{ border: "solid" }} className=" h-32">
            <div>{}</div>
          </div>
          <div style={{ border: "solid" }} className="">
            Test
          </div>
          <div style={{ border: "solid" }}>Test</div>
        </div>
      </div>
    </>
  );
};

export default Home;
