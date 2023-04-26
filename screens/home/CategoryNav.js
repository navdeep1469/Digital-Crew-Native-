import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const CategoryNav = ({ setSelectedValue }) => {
  const category = [
    {
      id: "1",
      name: "All",
      val: "all",
      icon: "",
    },
    {
      id: "2",
      name: "Women's Wear",
      val: "women's clothing",
      icon: <FontAwesome name='female' size={20} color='white' />,
    },
    {
      id: "7",
      name: "Men's Wear",
      val: "men's clothing",
      icon: <FontAwesome name='male' size={20} color='white' />,
    },
    {
      id: "3",
      name: "Jewelery",
      val: "jewelery",
      icon: <FontAwesome name='diamond' size={20} color='white' />,
    },
    {
      id: "4",
      name: "Electronics",
      val: "electronics",
      icon: (
        <MaterialIcons name='electrical-services' size={20} color='white' />
      ),
    },
    {
      id: "5",
      name: "Price Low to High",
      val: "inc",
      icon: <AntDesign name='arrowup' size={20} color='white' />,
    },
    {
      id: "6",
      name: "Price High to Low",
      val: "dec",
      icon: <AntDesign name='arrowdown' size={20} color='white' />,
    },
  ];
  return (
    <View>
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                setSelectedValue(item.val);
              }}
            >
              <Text style={{ color: "white", marginRight: 2 }}>
                {" "}
                {item.name}
              </Text>
              {item.icon}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    minWidth: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default CategoryNav;
