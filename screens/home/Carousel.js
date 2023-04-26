import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const images = [
  {
    uri: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/11/product_photography_tips_4.jpg?resize=1500%2C1001&ssl=1",
  },
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYBtEapCImXUTmhLplrPpkitaXzI0awLz91cZD1gPDmFXzJQZUlKruiiVMiyS7iCwHrc&usqp=CAU",
  },
  {
    uri: "https://b1853233.smushcdn.com/1853233/wp-content/uploads/2020/06/eCommerce-product-photography-hero-4-1.jpg?lossy=0&strip=0&webp=1",
  },
];

const { width: screenWidth } = Dimensions.get("window");

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.uri }} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout='default'
        data={images}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 40}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    // marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 30,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default ImageCarousel;
