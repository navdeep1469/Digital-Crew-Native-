import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  let description = product.description.substring(0, 50);
  let title = product.title.substring(0, 20);
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("Images", { uri: product.image });
      }}
    >
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{product.rating.rate}⭐</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  details: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888",
    marginTop: 5,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  rating: {
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
});

export default ProductCard;
