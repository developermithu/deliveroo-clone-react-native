import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurent } from "../features/restaurentSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

export default function BasketScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const restaurent = useSelector(selectRestaurent);
  const basketTotal = useSelector(selectBasketTotal);

  useEffect(() => {
    // set same dish item in an array (not an object)
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  // console.log(groupedItemsInBasket);
  // console.log(restaurent)

  return (
    <SafeAreaView className="mt-12 flex-1">
      <View className="p-5 shadow border-b border-gray-200 bg-white">
        <View>
          <Text className="text-xl font-bold text-center">Basket</Text>
          <Text className="text-center text-gray-400 text-sm">
            {restaurent.name}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-4 right-5"
        >
          <XCircleIcon color="#00ccbc" size={50} />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center gap-x-4 px-4 py-3 my-4 bg-white">
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1543682823026266112/AjtF6cAn_400x400.jpg",
          }}
          className="w-7 h-7 rounded-full"
        />
        <Text className="flex-1 text-gray-500">Deliver in 50-75 min</Text>
        <TouchableOpacity>
          <Text className="text-primary">Change</Text>
        </TouchableOpacity>
      </View>

      {/* Order items */}
      <ScrollView
        className="divide-y divide-gray-300"
        showsVerticalScrollIndicator={false}
      >
        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
          <View
            key={key}
            className="flex-row items-center px-4 bg-white py-3 gap-x-3"
          >
            <Text className="text-primary">{items.length} x</Text>
            <Image
              source={{ uri: urlFor(items[0]?.image).url() }}
              className="w-12 h-12 rounded-full"
            />
            <Text className="flex-1">{items[0]?.name}</Text>
            <Text className="text-gray-500">{items[0]?.price} tk</Text>

            <TouchableOpacity
              onPress={() => dispatch(removeFromBasket({ id: key }))}
            >
              <Text className="text-primary text-xs">Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Place order box */}
      <View className="mt-4 bg-white space-y-4 p-5">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Subtotal</Text>
          <Text className="text-gray-400">{basketTotal} tk</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Delivery Fee</Text>
          <Text className="text-gray-400">50 tk</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-bold">Order Total</Text>
          <Text className="font-bold">{basketTotal + 50} tk</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("PreparingOrder")}
          className="p-4 bg-primary rounded-lg"
        >
          <Text className="text-xl text-center text-white">Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
