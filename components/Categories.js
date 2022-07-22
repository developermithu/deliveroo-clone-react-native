import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
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
      <CategoryCard
        imgUrl="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1563210949270-3H44AZR3VF8BYPTCVVNT/WBC_0319.jpg?format=1500w"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1563210949270-3H44AZR3VF8BYPTCVVNT/WBC_0319.jpg?format=1500w"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1563210949270-3H44AZR3VF8BYPTCVVNT/WBC_0319.jpg?format=1500w"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1563210949270-3H44AZR3VF8BYPTCVVNT/WBC_0319.jpg?format=1500w"
        title="testing"
      />
    </ScrollView>
  );
}
