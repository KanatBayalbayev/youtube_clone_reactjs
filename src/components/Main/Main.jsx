import React, { useEffect, useState } from "react";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import Videos from "../Videos/Videos";
import "./Main.scss";
import fromApi from "../api";
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  const getSelectedCategory = (data) => {
    setSelectedCategory(data);
  };

  return (
    <main>
      <SidebarMenu getSelectedCategory={getSelectedCategory} />
      <Videos selectedCategory={selectedCategory} videos={videos} />
    </main>
  );
};

export default Main;
