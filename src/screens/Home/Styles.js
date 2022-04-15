import { StyleSheet } from "react-native";

export default StyleSheet.create({
    viewHome: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    titleHome: {
        color: "#000000",
        fontSize: 60,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 120,
        marginBottom: 80,
    },
    viewButtons: {
        alignItems: "center",
    },
    insertButton: {
        backgroundColor: "#8706f9",
        width: 250,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 60,
        borderRadius: 10,
    },
    insertButtonText: {
        color: "#ffffff",
        fontSize: 30,
    },
    listButton: {
        backgroundColor: "#2ae0b2",
        width: 250,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 60,
        borderRadius: 10,
    },
    listButtonText: {
        color: "#ffffff",
        fontSize: 30,
    },
    deleteButton: {
        backgroundColor: "#e40404",
        width: 250,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    deleteButtonText: {
        color: "#ffffff",
        fontSize: 30,
    }
});
