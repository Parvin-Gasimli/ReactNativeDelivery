import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/outline";

const RestourantCard = ({
  id,
  title,
  imageUrl,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: imageUrl,
        }}
        className="h-36 w-64 rounded-md object-cover"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-1">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>* {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Text className="text-xs text-gray-500 mt-2">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestourantCard;
