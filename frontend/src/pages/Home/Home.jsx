import { useState } from "react";
import ExploreMenu from "../../components/Navbar/ExploreMenu/ExploreMenu";
import Header from "../../components/Navbar/Header/Header";
import "./Home";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
