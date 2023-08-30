import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";

const CategoryCard = ({ ImageUrl, title }) => {
  return (
    <TouchableOpacity>
      <View className="relative mr-2">
        <Image
          source={{
            uri: ImageUrl,
          }}
          className="w-24 h-24 rounded"
        />
        <Text className="absolute bottom-1 left-1 text-white font-bold ">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
