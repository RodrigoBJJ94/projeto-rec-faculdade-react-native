import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./Styles";

export default function List({ nameProduct, classProduct, descriptionProduct,
    amountProduct, setScreen, getScreenHome }) {

    function setScreenHome() {
        setScreen("Home");
        return getScreenHome();
    };

    if (nameProduct !== "" || classProduct !== "" ||
        descriptionProduct !== "" || amountProduct !== "") {
        return (
            <View style={Styles.viewList}>
                <Text style={Styles.titleList}>Lista dos Produtos</Text>
                <Text style={Styles.productsList}>Nome do Produto: {nameProduct}</Text>
                <Text style={Styles.productsList}>Classe do Produto: {classProduct}</Text>
                <Text style={Styles.productsList}>Descrição do Produto: {descriptionProduct}</Text>
                <Text style={Styles.productsList}>Quantidade do Produto: {amountProduct}</Text>
                <TouchableOpacity style={Styles.buttonList} onPress={() => setScreenHome()}>
                    <Text style={Styles.buttonTextList}>Voltar para o Menu</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View style={Styles.viewEmptyList}>
                <Text style={Styles.titleEmptyList}>Nenhum produto salvo</Text>
                <TouchableOpacity style={Styles.buttonEmptyList} onPress={() => setScreenHome()}>
                    <Text style={Styles.buttonTextEmptyList}>Voltar para o Menu</Text>
                </TouchableOpacity>
            </View>
        );
    };
};
