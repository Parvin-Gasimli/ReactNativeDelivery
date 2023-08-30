import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Categrories from "../componnets/Categrories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3  items-center mx-4 space-x-2  px-4">
        <Image
          className="w-10 h-10 rounded-full"
          source={{
            uri: "https://www.comparatif-logiciels.fr/wp-content/uploads/2021/06/flaticon-avis-tarif-alternative-comparatif-logiciels-saas.webp",
          }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon color="#00CCBB" size={20} />
          </Text>
        </View>
        <UserIcon size={35} />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 rounded-md  bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            keyboardType="default"
            placeholder="Search for restaurants, dishes..."
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categrories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
