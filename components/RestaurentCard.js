import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";

export default function RestaurentCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  return (
    <TouchableOpacity className="mr-3 shadow bg-white rounded">
      <View>
        <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />

        <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-1.5">{title}</Text>
          <View className="flex-row items-center gap-x-1">
            <StarIcon color="#00ccbc" size={22} opacity={0.5} />
            <Text className="text-xs text-gray-500">
              <Text className=" text-green-500">{rating}</Text> . {genre}
            </Text>
          </View>

          <View className="flex-row items-center gap-x-1">
            <LocationMarkerIcon color="gray" size={22} opacity={0.4} />
            <Text className="text-xs text-gray-500">Nearby, {address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
