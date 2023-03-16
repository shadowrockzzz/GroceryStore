import React from "react";
import { Text, View, Image, StyleSheet, Button, TextInput } from "react-native";

function Product(props) {
  // All the styles used in this page are mentioned in this styles object

  const styles = StyleSheet.create({
    discountedPrice: {
      display: "flex",
      flexDirection: "row",
    },
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    container: {
      position: "absolute",
      zIndex: 3,
      width: 50,
      height: "10%",
      top: -40,
      right: -60,
    },
    image: {
      width: 200,
      height: "50%",
      display: "flex",
    },
    lineThrough: {
      textDecorationLine: "line-through",
    },
    innerdiscountedPrice: {
      marginLeft: 10,
      color: "green",
    },
    sellerAddress: {
      width: 180,
    },
    button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    inputText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  // The "buyProduct" function is for adding the products to the BOUGHT list

  const buyProduct = () => {
    if (props.product.quantity >= props.quantityAsk) {
      let obj = props.product;

      obj["quantityBought"] = props.quantityAsk;

      props.changeBought((arr) => [...arr, obj]);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Button onPress={props.windowTrigger} title="X" color="red" />
      </View>
      <Image style={styles.image} source={props.image} />
      <Text>{props.product.name}</Text>
      <Text>Quantity available : {props.product.quantity}</Text>
      <Text> Discount available : {props.product.discount}</Text>
      <View style={styles.discountedPrice}>
        <Text>Price : </Text>
        <Text style={styles.lineThrough}>{props.product.price}</Text>
        <Text style={styles.innerdiscountedPrice}>
          {props.product.discountedPrice}
        </Text>
      </View>
      <Text style={styles.sellerAddress}>
        Seller Address : {props.product.sellerInformation}
      </Text>
      <View style={styles.button}>
        <Button
          onPress={() => {
            if (props.quantityAsk > 0) {
              props.changeQuantityAsk(props.quantityAsk - 1);
            }
          }}
          title="-"
        />

        <TextInput
          style={styles.inputText}
          value={props.quantityAsk.toString()}
          onChangeText={(data) => {
            props.changeQuantityAsk(Number(data));
          }}
        ></TextInput>
        <Button
          title="+"
          onPress={() => {
            if (props.quantityAsk < props.product.quantity) {
              props.changeQuantityAsk(props.quantityAsk + 1);
            }
          }}
        />
      </View>
      <Button
        title="Buy"
        onPress={() => {
          buyProduct();
        }}
      />
    </View>
  );
}

export default Product;
