import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Images/Loading.gif";

const RecipePage = (props) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const api = await fetch(URL);
        const res = await api.json();
        console.log(res);
        setData(res.meals[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {data && (
        <div>
          <Navbar />
          <div
            style={{
              border: "solid",
              height: "87vh",
              position: "",
              overflow: "auto", // Add this line to enable scrolling if content overflows
              padding: "10px", // Add padding to prevent text from touching the border
            }}
            className="justify-center items-center "
          >
            <div className="flex justify-center items-center ">
              <img
                src={data && data.strMealThumb}
                alt="Food"
                className="flex justify-center items-center  w-1/5 rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center ">
              <h1 className="inline-block text-3xl ">{data && data.strMeal}</h1>
            </div>
            <div className="flex justify-center items-center ">
              <h1 className="inline-block text-xl ">
                Cuisine: {data && data.strArea}
              </h1>
            </div>

            <h1>{data && data.strCategory}</h1>
            <p> {data && data.strTags}</p>
            <p>Instructions:{data && data.strInstructions}</p>
            <h1>Ingridients:</h1>
            <ul className="flex">
              {Object.keys(data)
                .filter((key) => key.startsWith("strIngredient") && data[key])
                .map((key, index) => (
                  <li key={index} className="pr-">
                    {data[key]},
                  </li>
                ))}
            </ul>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default RecipePage;
