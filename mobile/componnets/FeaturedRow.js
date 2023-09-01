import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native-gesture-handler";
import RestourantCard from "./RestourantCard";

const FeaturedRow = ({ id, title, description, address }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className="tex-xs text-gray-500 px-4">{description || ""}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestourantCard
          id={123}
          imageUrl={
            "https://www.comparatif-logiciels.fr/wp-content/uploads/2021/06/flaticon-avis-tarif-alternative-comparatif-logiciels-saas.webp"
          }
          title={title}
          rating={4.5}
          genre={"Asian"}
          address={address || ""}
          short_description={"salasm"}
          dishes={[]}
          long={12}
          lat={1}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
