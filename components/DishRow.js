import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { useState } from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/solid";

export default function DishRow({ id, name, short_description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white flex-row items-center justify-between p-4 border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View>
          <Text className="text-[15px]">{name}</Text>
          <Text className="text-gray-400 text-xs py-1">
            {short_description}
          </Text>
          <Text className="text-sm text-gray-500">{price} tk</Text>
        </View>

        <Image source={{ uri: urlFor(image).url() }} className="w-16 h-16" />
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white flex-row items-center gap-x-2 px-4 pb-2">
          <MinusCircleIcon color="#00ccbc" size={36} />
          <Text>0</Text>
          <PlusCircleIcon color="#00ccbc" size={36} />
        </View>
      )}
    </>
  );
}
