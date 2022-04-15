import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
//import Insert from "../Insert/Insert";
//import List from "../List/List";

export default function Home() {
    const [screen, setScreen] = useState("Home");
    const [nameProduct, setNameProduct] = useState("");
    const [classProduct, setClassProduct] = useState("");
    const [descriptionProduct, setDescriptionProduct] = useState("");
    const [amountProduct, setAmountProduct] = useState("");

    if (screen === "Home") {
        return getScreenHome();
    } else if (screen === "Insert") {
        return getScreenInsert();
    } else if (screen === "List") {
        return getScreenList();
    };

    function setScreenInsert() {
        setScreen("Insert");
        return getScreenInsert();
    };

    function setScreenList() {
        setScreen("List");
        return getScreenList();
    };

    function setScreenDelete() {
        if (nameProduct !== "" || classProduct !== "" ||
            descriptionProduct !== "" || amountProduct !== "") {
            setNameProduct("")
            setClassProduct("");
            setDescriptionProduct("");
            setAmountProduct("");
            Alert.alert("Todos os produtos foram excluídos!");
        } else {
            Alert.alert("Ainda não foi incluído nenhum produto para ser excluído!");
        };
    };

    function setScreenHome() {
        setScreen("Home");
        return getScreenHome();
    };

    function getScreenHome() {
        return (
            <View>
                <Text>Menu</Text>
                <View>
                    <TouchableOpacity onPress={() => setScreenInsert()}>
                        <Text>Incluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setScreenList()}>
                        <Text>Listar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setScreenDelete()}>
                        <Text>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    function getScreenInsert() {
        return (
            <View>
                <Text>Inclusão de Produtos</Text>
                <View>
                    <Text>Nome do Produto</Text>
                    <TextInput onChangeText={text => setNameProduct(text)} />
                    <Text>Classe do Produto</Text>
                    <TextInput onChangeText={text => setClassProduct(text)} />
                    <Text>Descrição do Produto</Text>
                    <TextInput onChangeText={text => setDescriptionProduct(text)} />
                    <Text>Quantidade do Produto</Text>
                    <TextInput onChangeText={text => setAmountProduct(text)} />
                </View>
                <TouchableOpacity onPress={() => setScreenHome()}>
                    <Text>Voltar para o Menu</Text>
                </TouchableOpacity>
            </View>
        );
    };

    function getScreenList() {
        return (
            <View>
                <Text>Lista dos Produtos</Text>
                <View>
                    <Text>Nome do Produto: {nameProduct}</Text>
                    <Text>Classe do Produto: {classProduct}</Text>
                    <Text>Descrição do Produto: {descriptionProduct}</Text>
                    <Text>Quantidade do Produto: {amountProduct}</Text>
                </View>
                <TouchableOpacity onPress={() => setScreenHome()}>
                    <Text>Voltar para o Menu</Text>
                </TouchableOpacity>
            </View>
        );
    };
};
