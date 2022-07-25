import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

export default function BasketIcon() {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="flex-row items-center justify-between bg-[#00ccbc] mx-5 p-4 rounded-lg"
      >
        <Text className="text-lg bg-[#01a296] text-white px-2">
          {items.length}
        </Text>
        <Text className="text-white font-bold text-lg">View Basket</Text>
        <Text className="text-lg text-white font-bold">{basketTotal} tk</Text>
      </TouchableOpacity>
    </View>
  );
}
