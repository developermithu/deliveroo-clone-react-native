import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import client from "../sanity";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "category"]`).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >

      {/* category card */}
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          id={category._id}
          imgUrl={category.image}
          name={category.name}
        />
      ))}
      
    </ScrollView>
  );
}
