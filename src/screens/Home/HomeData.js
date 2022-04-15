import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Styles from "./Styles";

export default function HomeData({ setScreen, getScreenInsert, getScreenList,
    nameProduct, classProduct, descriptionProduct, amountProduct,
    setNameProduct, setClassProduct, setDescriptionProduct, setAmountProduct }) {

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
    return (
        <View style={Styles.viewHome}>
            <Text style={Styles.titleHome}>Menu</Text>
            <View style={Styles.viewButtons}>
                <TouchableOpacity style={Styles.insertButton}
                    onPress={() => setScreenInsert()}>
                    <Text style={Styles.insertButtonText}>Incluir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.listButton}
                    onPress={() => setScreenList()}>
                    <Text style={Styles.listButtonText}>Listar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.deleteButton}
                    onPress={() => setScreenDelete()}>
                    <Text style={Styles.deleteButtonText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
