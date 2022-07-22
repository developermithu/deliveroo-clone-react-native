import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
      >
        {/* categories */}
        <Categories />

        {/* feaured row */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="paid placements from our partners"
        />
        {/* discounts */}
        <FeaturedRow
          id="12"
          title="Tasty discounts"
          description="Lorem, ipsum dolor sit amet consectetur"
        />
        {/* offers near */}
        <FeaturedRow
          id="123"
          title="Offers near you"
          description="Why not support your local restaurent"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
