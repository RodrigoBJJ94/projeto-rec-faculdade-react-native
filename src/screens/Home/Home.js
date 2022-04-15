import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert, StatusBar } from "react-native";
import Styles from "./Styles";
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

    function getScreenHome() {
        return (
            <View style={Styles.viewHome}>
                <StatusBar backgroundColor="#000000" />
                <Text style={Styles.titleHome}>Menu</Text>
                <View style={Styles.viewButtons}>
                    <TouchableOpacity style={Styles.insertButton} onPress={() => setScreenInsert()}>
                        <Text style={Styles.insertButtonText}>Incluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.listButton} onPress={() => setScreenList()}>
                        <Text style={Styles.listButtonText}>Listar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.deleteButton} onPress={() => setScreenDelete()}>
                        <Text style={Styles.deleteButtonText}>Excluir</Text>
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
                <TouchableOpacity onPress={() => insertScreenHome()}>
                    <Text>Concluir Inclusão</Text>
                </TouchableOpacity>
            </View>
        );
    };

    function getScreenList() {
        if (nameProduct !== "" || classProduct !== "" ||
            descriptionProduct !== "" || amountProduct !== "") {
            return (
                <View style={Styles.viewList}>
                    <Text style={Styles.titleList}>Lista dos Produtos</Text>
                    <View style={Styles.viewProductsList}>
                        <Text style={Styles.productsList}>Nome do Produto: {nameProduct}</Text>
                        <Text style={Styles.productsList}>Classe do Produto: {classProduct}</Text>
                        <Text style={Styles.productsList}>Descrição do Produto: {descriptionProduct}</Text>
                        <Text style={Styles.productsList}>Quantidade do Produto: {amountProduct}</Text>
                    </View>
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
};
