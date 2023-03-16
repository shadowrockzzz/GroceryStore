import React from "react";

import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Wrapper(props) {

  // All the styles used in this page are mentioned in this styles object

  const styles = StyleSheet.create({
    view: {
      width: "70%",
      marginLeft: "15%",
      marginRight: "15%",
      height: 200,
      margin: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f6f6f6",
      paddingTop: 30,
    },

    image: {
      width: 200,
      height: 120,
    },

    discount: {
      position: "absolute",
      zIndex: 1,
      top: 15,
      left: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      backgroundColor: "yellow",
      borderRadius: 100,
    },

    discountedPrice: {
      display: "flex",
      flexDirection: "row",
    },
  });


  return (

    // Used Touchable Opacity here , so to have touch access

    <TouchableOpacity
      style={styles.view}
      onPress={() => {
        props.changeProductInformation(props.name);
        props.windowTrigger();
      }}
    >
      <Image style={styles.image} source={props.image} />
      <Text>{props.name}</Text>
      <View style={styles.discount}>
        <Text>{props.discount}</Text>
      </View>
      <View style={styles.discountedPrice}>
        <Text>Price : </Text>
        <Text style={{ textDecorationLine: "line-through" }}>
          {props.price}
        </Text>
        <Text style={{ marginLeft: 10, color: "green" }}>
          {props.discountPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
}


export default Wrapper;
