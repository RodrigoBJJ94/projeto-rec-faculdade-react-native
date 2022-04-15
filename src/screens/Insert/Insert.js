import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function Insert({ insert, list, remove }) {

    {
        insert == true && (
            <View>
                <Text>Inclua um Produto</Text>
                <View>
                    <Text>Nome do Produto</Text>
                    <TextInput onChangeText={text => setNameProduct(text)} />
                    <Text>Classe do Produto</Text>
                    <TextInput />
                    <Text>Descrição do Produto</Text>
                    <TextInput />
                    <Text>Quantidade do Produto</Text>
                    <TextInput />
                </View>
                <TouchableOpacity>
                    <Text>Excluir</Text>
                </TouchableOpacity>
            </View>
        ) 
    }
    {
        list ? (
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
        ) : null
    }
}

/*
    const [nameProduct, setNameProduct] = useState("");
    const [classProduct, setClassProduct] = useState("");
    const [descriptionProduct, setDescriptionProduct] = useState("");
    const [amountProduct, setAmountProduct] = useState("");
*/