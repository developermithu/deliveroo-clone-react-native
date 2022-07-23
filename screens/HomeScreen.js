import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"]{
      ...,
       restaurents[] => {
         ...,
       }
    }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  // console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white px-4 pt-10">
      {/* Header */}
      <View className="flex-row items-center gap-x-3">
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1543682823026266112/AjtF6cAn_400x400.jpg",
          }}
          className="w-7 h-7"
        />

        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Deliver now</Text>
          <View className="flex-row items-center gap-x-1">
            <Text className="text-xl font-bold">Current Location</Text>
            <ChevronDownIcon size={20} color="#00ccbc" />
          </View>
        </View>

        <UserIcon size={30} color="#00ccbc" />
      </View>

      {/* Search */}
      <View className="flex-row items-center justify-between gap-x-2 pt-3 pb-2">
        <View className="flex-row items-center flex-1 gap-x-2 bg-gray-200 p-2.5 rounded">
          <SearchIcon size={20} color="gray" />
          <TextInput
            keyboardType="default"
            placeholder="Restaurents and cruisines"
            className="flex-1"
          />
        </View>

        <AdjustmentsIcon color="#00ccbc" size={20} />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* categories */}
        <Categories />

        {/* feaured row */}
        {featuredCategories.map((featuredCategory) => (
          <FeaturedRow
            key={featuredCategory._id}
            id={featuredCategory._id}
            name={featuredCategory.name}
            short_description={featuredCategory.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
