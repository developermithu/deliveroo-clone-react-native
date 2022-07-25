import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { setRestaurent } from "../features/restaurentSlice";
import { useDispatch } from "react-redux";

export default function RestaurentScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      name,
      rating,
      category,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  // console.log(dishes);

  // header will be hidden
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // Redux restaurentSlice
  useEffect(() => {
    dispatch(
      setRestaurent({
        id,
        imgUrl,
        name,
        rating,
        category,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, []);

  return (
    <>
      {/* Basket Item Card */}
      <BasketIcon />

      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 p-4"
          />
          {/* back button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2.5 bg-gray-50 absolute top-14 left-6 rounded-full"
          >
            <ArrowLeftIcon color="#00ccbc" size={20} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <Text className="text-xl font-bold pt-3 pb-2 px-4">{name}</Text>
          <View className="flex-row items-center gap-x-3 px-3 pb-2">
            <View className="flex-row items-center gap-x-1">
              <StarIcon color="green" size={20} opacity={0.5} />
              <Text className="text-xs text-green-500">
                {rating}. <Text className="text-gray-400">{category}</Text>
              </Text>
            </View>

            <View className="flex-row items-center gap-x-1">
              <LocationMarkerIcon color="gray" size={20} opacity={0.4} />
              <Text className="text-xs text-gray-500">{address}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity className="flex-row items-center border-y border-gray-300 py-3 px-4 space-x-3 bg-white">
          <QuestionMarkCircleIcon color="gray" size={20} opacity={0.5} />
          <Text className="flex-1 font-semibold">Have a food allergy?</Text>
          <ChevronRightIcon color="#00ccbc" size={20} />
        </TouchableOpacity>

        <Text className="py-3 text-xl px-4 font-semibold">Menu</Text>

        <View className="pb-36">
          {/* DishRow */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              short_description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
