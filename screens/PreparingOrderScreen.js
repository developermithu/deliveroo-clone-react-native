import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PreparingOrderScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary">
      <Animatable.Image
        animation="slideInUp"
        source={require("../assets/deliveryboy.gif")}
        iterationCount={1}
        className="h-80 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg text-white font-bold my-10"
      >
        Order placing ...
      </Animatable.Text>

      <Progress.Circle
        size={60}
        color="white"
        borderWidth={3}
        progress={0.3}
        indeterminate={true}
      />
    </SafeAreaView>
  );
}
