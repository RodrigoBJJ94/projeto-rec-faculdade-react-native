import React from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import Styles from "./Styles";

export default function Insert({ nameProduct, classProduct, descriptionProduct,
    amountProduct, setScreen, getScreenHome, setNameProduct,
    setClassProduct, setDescriptionProduct, setAmountProduct }) {

    function insertScreenHome() {
        if (nameProduct !== "" || classProduct !== "" ||
            descriptionProduct !== "" || amountProduct !== "") {
            Alert.alert("Os dados foram salvos!");
        } else {
            Alert.alert("Nenhum dado foi salvo!");
        };
        setScreen("Home");
        return getScreenHome();
    };

    return (
        <View style={Styles.viewInsert}>
            <Text style={Styles.titleInsert}>Inclusão de Produtos</Text>
            <Text style={Styles.textsInsert}>Nome do Produto</Text>
            <TextInput style={Styles.inputInsert}
                onChangeText={text => setNameProduct(text)} />
            <Text style={Styles.textsInsert}>Classe do Produto</Text>
            <TextInput style={Styles.inputInsert}
                onChangeText={text => setClassProduct(text)} />
            <Text style={Styles.textsInsert}>Descrição do Produto</Text>
            <TextInput style={Styles.inputInsert}
                onChangeText={text => setDescriptionProduct(text)} />
            <Text style={Styles.textsInsert}>Quantidade do Produto</Text>
            <TextInput style={Styles.inputInsert}
                onChangeText={text => setAmountProduct(text)} />
            <TouchableOpacity style={Styles.buttonInsert}
                onPress={() => insertScreenHome()}>
                <Text style={Styles.buttonTextInsert}>Concluir Inclusão</Text>
            </TouchableOpacity>
        </View>
    );
};
