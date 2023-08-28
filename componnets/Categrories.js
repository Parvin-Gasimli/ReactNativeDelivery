import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categrories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 12,
      }}
    >
      <CategoryCard
        title="Delivered"
        ImageUrl="https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/nigiri-sushi_23_11zon-586.webp"
      />
      <CategoryCard
        title="Delivered"
        ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGgyDzH9HGGXL8mhMaiWFiakcaMUFpZ13Zow&usqp=CAU"
      />
      <CategoryCard
        title="Delivered"
        ImageUrl="https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/nigiri-sushi_23_11zon-586.webp"
      />
      <CategoryCard
        title="Delivered"
        ImageUrl="https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/nigiri-sushi_23_11zon-586.webp"
      />
    </ScrollView>
  );
};

export default Categrories;
