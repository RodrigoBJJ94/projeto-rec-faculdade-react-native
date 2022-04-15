import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Delete() {
    return (
        <View>
            <TouchableOpacity>
                <Text>Incluir</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Listar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
};
