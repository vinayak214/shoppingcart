import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MenuItem from './MenuItem';
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity } from './CartReducer';
import { decrementQty, getProducts, incrementQty } from './ProductReducer';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.product.product);


    const images = [
        {
            id: "0",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU",
            name: "Icecream",
            quantity: 0,
        },
        {
            id: "1",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85O96gPiso_j2gaS0cePTBY4mCR3pumV6tw&usqp=CAU",
            name: "Biscuit",
            quantity: 0,
        },
        {
            id: "2",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQWeRoxxLEr1RLIp8dJtw-NQvSE4xtlhwA&usqp=CAU",
            name: "Chocolate",
            quantity: 0,
        },
    ];
    useEffect(() => {
        if (products.length > 0) return;

        const fetchProducts = () => {
            images.map((image) => dispatch(getProducts(image)));
        };
        fetchProducts();
    }, []);

    const cart = useSelector((state: any) => state.cart.cart);

    console.log("Cart::" + JSON.stringify(cart))
    return (
        <ScrollView>
            <Text style={{
                color: 'red',
                textAlign: 'center',
                marginVertical: 10,
                fontSize: 15,
            }}>Products Page
            </Text>
            {products.map((item: any, index: any) => (
                <MenuItem key={item.id} item={item} />
            ))}
            <Text
                style={{
                    fontSize: 18,
                    textAlign: "center",
                    marginTop: 40,
                    color: "red",
                }}>
                Cart Page
            </Text>
            {cart.map((item: any, index: any) =>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                    <View>
                        <Text style={{ marginBottom: 10, fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                        <Image source={{ uri: item.image }}
                            style={{ width: 80, height: 80, borderRadius: 10 }}
                        ></Image>
                    </View>

                    <Pressable

                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#FF3366",
                            borderRadius: 5,
                            width: 120,
                        }}
                    >
                        <Pressable onPress={() => {
                            dispatch(decrementQuantity(item)),//cart
                                dispatch(decrementQty(item))
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
                                    paddingHorizontal: 10,
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
                </Pressable>
            )}
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})