import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";

const CategoryCard = ({ ImageUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 ">
      <Image source={{ uri: ImageUrl }} className="w-20 h-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
