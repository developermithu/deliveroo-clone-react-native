import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

export default function CategoryCard({ id, name, imgUrl }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-20 h-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold capitalize">
        {name}
      </Text>
    </TouchableOpacity>
  );
}
