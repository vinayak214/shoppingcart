import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from './CartReducer';
import { decrementQty, incrementQty } from './ProductReducer';


const MenuItem = ({ item }: any) => {

  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cart);


  const addItemToCart = (item: any) => {
    dispatch(addToCart(item)); // cart array being used
     dispatch(incrementQty(item)); // product array being used
  };

  return (
    <SafeAreaView>
      <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
        <View>
          <Text style={{ marginBottom: 10, fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
          <Image source={{ uri: item.image }}
            style={{ width: 80, height: 80, borderRadius: 10 }}
          ></Image>
        </View>
        {cart.some((value: any) => value.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FF3366",
              borderRadius: 5,
              width: 120,
            }}>
            <Pressable
                onPress={() => {
                  dispatch(decrementQuantity(item)),
                  dispatch(decrementQty(item))//cart
                }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 25,
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                dispatch(incrementQuantity(item)),
                dispatch(incrementQty(item))//cart
              }}

            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable onPress={() => addItemToCart(item)}>
            <Text
              style={{
                borderColor: "gray",
                borderWidth: 1,
                marginVertical: 10,
                padding: 5,
              }}
            >
              ADD TO CART
            </Text>
          </Pressable>
        )}

      </Pressable >
    </SafeAreaView >
  )
}

export default MenuItem

const styles = StyleSheet.create({})