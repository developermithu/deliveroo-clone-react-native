import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurentCard from "./RestaurentCard";

export default function FeaturedRow({ id, title, description }) {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbc" size={20} />
      </View>

      <Text className="text-gray-500 text-xs px-4">{description}</Text>

      {/* Scroll view */}
      <ScrollView
        className="pt-4 pb-6"
        contentContainerStyle={{ paddingHorizontal: 15 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* restaurent cards */}
        <RestaurentCard
          id={123}
          imgUrl="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1563210949270-3H44AZR3VF8BYPTCVVNT/WBC_0319.jpg?format=1500w"
          title="Rosmolai"
          rating={4.5}
          genre="chinese"
          address="3000 Sylhet"
          short_description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, odio?"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurentCard
          id={123}
          imgUrl="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1563210949270-3H44AZR3VF8BYPTCVVNT/WBC_0319.jpg?format=1500w"
          title="Rosmolai"
          rating={4.5}
          genre="chinese"
          address="3000 Sylhet"
          short_description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, odio?"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurentCard
          id={123}
          imgUrl="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1563210949270-3H44AZR3VF8BYPTCVVNT/WBC_0319.jpg?format=1500w"
          title="Rosmolai"
          rating={4.5}
          genre="chinese"
          address="3000 Sylhet"
          short_description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, odio?"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
