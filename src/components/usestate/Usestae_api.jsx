import React, { useState, useEffect } from "react";
import axios from "axios";

const Usestae_api = () => {
  const [apidata, setapidata] = useState();

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata        "
      );
      console.log(res.data.meals[0].idMeal);
      setapidata(res.data); // Access the 'data' property of the response
    } catch (error) {
      console.log("error====>", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Food api</h1>
      <h1>{apidata?.meals[0].idMeal}</h1>
    </div>
  );
};

export default Usestae_api;
