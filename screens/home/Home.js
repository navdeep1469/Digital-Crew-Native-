import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import CategoryNav from "./CategoryNav";
import ProductCard from "./ProductCard";
import { SafeAreaView } from "react-native";

const windowWidth = Dimensions.get("window").width;
const API_URL = "https://fakestoreapi.com/products";

const Home = () => {
  const [selectedValue, setSelectedValue] = useState("all");
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  // console.log(selectedValue);
  // console.log(products);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      setData(jsonData);
      setProducts(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedValue === "all") setProducts(data);
    else {
      if (selectedValue === "inc") {
        setProducts([...data].sort((a, b) => a.price - b.price));
      } else if (selectedValue === "dec") {
        setProducts([...data].sort((a, b) => b.price - a.price));
      } else
        setProducts(
          data.filter((product) => product.category === selectedValue)
        );
    }
  }, [selectedValue, data]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Digital Crew Assignment</Text>
      </View>
      <CategoryNav setSelectedValue={setSelectedValue} />

      <ScrollView>
        <View style={styles.container2}>
          {products.map((product, index) => {
            return (
              <View style={styles.cardContainer} key={index}>
                <ProductCard product={product} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // padding: 10,
  },
  container2: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  cardContainer: {
    width: "50%",
    padding: 10,
  },

  header: {
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
  },
  headerTxt: {
    fontSize: 20,
    color: "white",
  },
});

export default Home;
