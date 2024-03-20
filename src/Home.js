import React from "react";
import Navbar from "./Navbar";
import "./Stylings/Home.css";
import { useTheme } from "./ThemeContext";
import Kitchen from "./Images/Kitchen.jpg";
import { useEffect, useState } from "react";
import Footer from "./Footer";

const Home = () => {
  const { theme } = useTheme();
  const dividerWords = ["Enjoy Cooking!", "Great Foods Ahead!", "Great Taste!"];
  const [word, SetWord] = useState(0);
  const [foods, setFoods] = useState([]);

  const URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const js = await res.json();
        return js.meals[0];
      } catch (err) {
        console.log(err);
        return null;
      }
    };

    const loopThroughFoods = async () => {
      const foodCount = 3;
      const fetchedFoods = [];
      for (let i = 0; i < foodCount; i++) {
        const data = await fetchData();
        fetchedFoods.push(data);
      }
      setFoods(fetchedFoods);
      if (foods.length === 3) {
        console.log(foods);
      }
    };

    loopThroughFoods();

    const interval = setInterval(() => {
      SetWord((prevWord) => (prevWord + 1) % dividerWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const setTheme = () => {
    return {
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
    };
  };

  const inverseTheme = () => {
    return {
      color: theme === "light" ? "black" : "white",
    };
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          setTheme,
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
        <div
          className="  flex items-center justify-center h-15 "
          style={{
            setTheme,
          }}
        >
          <h2 className="font-bold text-xl">Random Foods</h2>
        </div>
        <div className="grid grid-cols-3 justify-center" style={{ setTheme }}>
          {foods.map((food, index) => (
            <div
              key={index}
              style={{
                border: "solid",
                backgroundColor: theme === "light" ? "white" : "black",
              }}
            >
              <div
                className="text-center font-bold"
                style={{
                  color: theme === "light" ? "black" : "white",
                }}
              >
                <h1>{food?.strArea}</h1>
              </div>
              <h1
                className="text-center"
                style={{
                  color: theme === "light" ? "black" : "white",
                }}
              >
                {food?.strMeal}
              </h1>

              <img src={food?.strMealThumb} />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
