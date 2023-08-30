import { ScrollView, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { client } from "../service/Sanity";

const Categrories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    client.fetch(`*[_type == "category"]`).then((data) => {
      setProducts(data);
    });
  };
  console.log(products);
  const Products = [
    {
      id: 1,
      title: "Delivered",
      ImageUrl:
        "https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyMDcxODY5fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Delivered",
      ImageUrl:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Delivered",
      ImageUrl:
        "https://images.unsplash.com/photo-1529589510304-b7e994a92f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Delivered",
      ImageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Delivered",
      ImageUrl:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 12,
        marginBottom: 20,
      }}
    >
      {/* <View>
      ///Sanity API TEST
        {products &&
          products.map((product, index) => (
            <Text key={index}>{product.title}</Text>
          ))}
      </View> */}
      {Products &&
        Products.map((product, index) => (
          <CategoryCard
            key={index}
            ImageUrl={product.ImageUrl}
            title={product.title}
          />
        ))}
    </ScrollView>
  );
};

export default Categrories;
