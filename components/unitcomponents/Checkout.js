// This script is for checkout page . I have only written the code for to add the details to BOUGHT list , 
// but I have not written code to remove the bought items in the overall products due to insuffiecient time

import React from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

function Checkout(props) {
  // Sum to get the total of all the products

  let sum = 0;

  // All the styles used in this page are mentioned in this styles object

  const styles = StyleSheet.create({
    button1: {
      position: "relative",
      top: -250,
      right: -170,
      width: 30,
      height: props.cartOpen ? 30 : 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 3,
    },

    button2: {
      position: "relative",
      top: 20,
      left: 250,
      width: 30,
      height: props.cartOpen ? 30 : 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 3,
    },

    product: {
      display: "flex",
      flexDirection: "column",
      padding: 10,
      width: 260,
      height: 100,
      margin: 5,
    },
  });

  // Function to finalise the buy function . After you click on buy button , it will empty the BOUGHT list

  const buy = () => {
    let message =
      " You Successfully bought the goods worth upto " + sum.toString();
    Alert.alert(message);
    props.changeBought([]);
  };

  // We have IF condition here, so that if the BOUGHT is empty , it will a text with "No Products in the cart" , 
  // else it will show the products

  if (props.bought.length === 0) {
    return (
      <View>
        <View style={styles.button1}>
          <Button title="-" onPress={props.openCart} />
        </View>
        <Text > No Products in the cart</Text>
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.button2}>
          <Button title="-" onPress={props.openCart} />
        </View>

          {/* We have Scroll View here to scroll the different types of products */}

        <ScrollView>
          {props.bought.map((data, key = 0) => {
            key += 1;
            sum += data.quantityBought * data.discountedPrice;
            return (
              <View key={key} style={styles.product}>
                <Text>Name : {data.name}</Text>
                <Text>Price per each unit : {data.discountedPrice}</Text>
                <Text>quantity bought : {data.quantityBought}</Text>
                <Text>
                  Total : {data.quantityBought * data.discountedPrice}
                </Text>
              </View>
            );
          })}
          <Text> Grand Total : {sum}</Text>
          <Button title="Buy" onPress={buy} />
        </ScrollView>
      </View>
    );
  }
}

export default Checkout;
