import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { XIcon } from "react-native-heroicons/outline";
import MapView, { Marker } from "react-native-maps";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurent } from "../features/restaurentSlice";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurent = useSelector(selectRestaurent);

  return (
    <View className="bg-primary flex-1">
      <View className="flex-row items-center justify-between p-5 pt-14">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <XIcon size={30} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg">Order Help</Text>
      </View>

      <View className="mx-5 p-4 bg-white rounded-md space-y-2 z-50">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-3xl font-extrabold">20-30 Minutes</Text>
          </View>
          <Image
            source={require("../assets/deliverygirl.png")}
            className="h-16 w-16"
          />
        </View>

        <Progress.Bar size={30} color="#00ccbc" indeterminate={true} />
        <Text className="text-gray-500">
          Your order at {restaurent.name} is being prepared
        </Text>
      </View>

      {/* React Native Maps */}
      <MapView
        initialRegion={{
          latitude: restaurent.lat,
          longitude: restaurent.long,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        className=" -mt-10 flex-1 h-full"
        // mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: restaurent.lat, longitude: restaurent.long }}
          title={restaurent.name}
          description={restaurent.short_description}
          identifier="origin"
          pinColor="#00ccbc"
        />
      </MapView>

      {/* Delivery Boy */}
      <SafeAreaView className="flex-row items-center gap-x-4 bg-white p-5 h-24">
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1543682823026266112/AjtF6cAn_400x400.jpg",
          }}
          className="w-12 h-12 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-semibold text-lg text-gray-700">
            Developer Mithu
          </Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text className="text-primary text-lg font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
}
