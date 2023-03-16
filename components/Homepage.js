import React from "react";

import { useState } from "react";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import products from "../assets/products/products.js";
import Checkout from "./unitcomponents/Checkout.js";
import Product from "./unitcomponents/Product.js";
import Wrapper from "./unitcomponents/Wrapper.js";

function Homepage() {

  // Objects used for images are mentioned here 

  const images = {
    carrot: require("../assets/vegetable-pictures/carrot.jpg"),
    radish: require("../assets/vegetable-pictures/radish.jpg"),
  };

  const otherImages = {
    cart: require("../assets/cartImage.png"),
  };

  // All the hook variables used in this page or its children pages are mentioned here

  const [productWindow, triggerProductWindow] = useState(false);

  const [quantityAsk, changeQuantityAsk] = useState(0);

  const [cartOpen, setCartOpen] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    discount: "",
    quantity: "",
    price: "",
    discountedPrice: "",
    pic: "",
    sellerInformation: "",
  });

  const [bought, changeBought] = useState([]);


  // All the styles used in this page are mentioned in this styles object

  const styles = StyleSheet.create({
    productWindow: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      zIndex: 2,
      width: "100%",
      backgroundColor: "yellow",
      height: productWindow ? 600 : 0,
      bottom: 0,
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      height: 100,
      width: "100%",
      backgroundColor: "blue",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    cartWindow: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      zIndex: 2,
      width: "100%",
      backgroundColor: "yellow",
      height: cartOpen ? 600 : 0,
      bottom: 0,
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 50,
      height: 50,
    },
    touuchableDiv: {
      position: "absolute",
      bottom: 25,
      right: 35,
      zIndex: 1,
    },
    scrollView: {
      width: 400,
      height: "100%",
    },
    textColor: {
      color: "#fff",
    },
  });

  // All the functions used in this page or it's children pages' are mentioned here

  const openCart = () => {
    if (cartOpen === false) {
      setCartOpen(true);
    } else {
      setCartOpen(false);
    }
  };

  const changeProductInformation = (name) => {
    for (let item in products) {
      if (name === products[item].name) {
        setProduct(products[item]);
        break;
      }
    }
  };

  const windowTrigger = () => {
    if (productWindow === false) {
      triggerProductWindow(true);
      changeQuantityAsk(0);
    } else {
      triggerProductWindow(false);
      changeQuantityAsk(0);
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textColor}>Grocery Mart</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {products.map((data) => {
          return (
            <Wrapper
              key={data.name}
              name={data.name}
              price={data.price}
              discountPrice={data.discountedPrice}
              image={images[data.pic]}
              discount={data.discount}
              windowTrigger={windowTrigger}
              changeProductInformation={changeProductInformation}
            ></Wrapper>
          );
        })}
      </ScrollView>
      <View style={styles.productWindow}>
        <Product
          windowTrigger={windowTrigger}
          changeProductInformation={changeProductInformation}
          product={product}
          image={images[product.pic]}
          quantityAsk={quantityAsk}
          changeQuantityAsk={changeQuantityAsk}
          changeBought={changeBought}
          bought={bought}
        ></Product>
      </View>

      <TouchableOpacity
        onPress={() => {
          openCart();
        }}
        style={styles.touuchableDiv}
      >
        <Image style={styles.image} source={otherImages.cart} />
      </TouchableOpacity>
      <View style={styles.cartWindow}>
        <Checkout
          openCart={openCart}
          cartOpen={cartOpen}
          bought={bought}
          changeBought ={changeBought}
        ></Checkout>
      </View>
    </View>
  );
}

export default Homepage;
