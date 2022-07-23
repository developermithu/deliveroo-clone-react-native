import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurentCard from "./RestaurentCard";
import sanityClient from "../sanity";

export default function FeaturedRow({ id, name, short_description }) {
  const [restaurents, setRestaurents] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == $id ] {
          ...,
          restaurents[] -> {
            ...,
            dishes[] ->,
            category -> {
              name
            }
          },
        }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurents(data?.restaurents);
      });
  }, [id]);

  // console.log(restaurents);

  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{name}</Text>
        <ArrowRightIcon color="#00ccbc" size={20} />
      </View>

      <Text className="text-gray-500 text-xs px-4">{short_description}</Text>

      {/* Scroll view */}
      <ScrollView
        className="pt-4 pb-6"
        contentContainerStyle={{ paddingHorizontal: 15 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* restaurent cards */}

        {restaurents.map((restaurent) => (
          <RestaurentCard
            key={restaurent._id}
            id={restaurent._id}
            imgUrl={restaurent.image}
            name={restaurent.name}
            rating={restaurent.rating}
            category={restaurent.category?.name}
            address={restaurent.address}
            short_description={restaurent.short_description}
            dishes={restaurent.dishes}
            long={restaurent.long}
            lat={restaurent.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
