import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaSearch } from "react-icons/fa";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Recipes = () => {
  const [data, setData] = useState(null);
  const [searchFood, setSearchFood] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const baseURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`;
      try {
        const response = await fetch(baseURL);
        const responseData = await response.json();
        setData(responseData.meals[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [searchFood]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchFood(text);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          border: "solid",
          height: "87vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          className="h-full object-cover w-1/2 "
          src={data && data.strMealThumb}
          alt="Thumbnail"
        />

        <div className="w-1/2">
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                style={{ border: "solid" }}
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}
                className="rounded-md h-12 w-96 max-w-96  mb-3"
              />

              <button type="submit">
                <FaSearch className="ml-2" />
              </button>
            </div>
          </form>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NavLink to={`/RecipePage/${data && data.idMeal}`}>
              <button className="bg-black rounded-full text-white w-32 h-12">
                {`Recipe for ${data?.strMeal}`}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recipes;
{
  /* <form onSubmit={handleSubmit}>
  <div style={{ display: "flex", alignItems: "center" }}>
    <input
      type="text"
      style={{ border: "solid" }}
      placeholder="Search"
      onChange={(e) => setText(e.target.value)}
      className="rounded-md h-12 w-96 max-w-96  mb-3"
    />
    <button type="submit">
      <FaSearch className="ml-2" />
    </button>
  </div>
  <div className="text-center" style={{ border: "solid" }}>
    <div className="container mx-auto h-96 ">
      <div className="relative w-full h-4/5"></div>
      <NavLink to={`/RecipePage/${data && data.idMeal}`}>
        <h1 className="text-xl hover:text-gray-600">{data && data.strMeal}</h1>
      </NavLink>
    </div>

    <h1 className="text-xl">{data && data.strArea}</h1>
    <h1 className="text-xl">{data && data.strCategory}</h1>

    <h1 className="text-xl">{data && data.strTags}</h1>
  </div>
</form>; */
}
