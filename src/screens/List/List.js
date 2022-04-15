import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function List({ nameProduct }) {
    return (
        <View>
            <Text>Inclua um Produto</Text>
            <View>
                <Text>Nome do Produto: {nameProduct}</Text>
                <Text>Classe do Produto</Text>
                <Text>Descrição do Produto</Text>
                <Text>Quantidade do Produto</Text>
            </View>
            <TouchableOpacity>
                <Text>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
};
