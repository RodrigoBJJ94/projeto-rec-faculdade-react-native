import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
    const [insert, setInsert] = useState(true);
    //let insert = true;
    //let list = true;
    //let remove = true;

    function getInsert() {
        navigation.navigate("Insert");
        setInsert(insert);
    }

    return (
        <View>
            <TouchableOpacity onPress={() => getInsert()}>
                <Text>Incluir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Insert", {
                list: list
            })}>
                <Text>Listar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Insert", {
                remove: remove
            })}>
                <Text>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
};
