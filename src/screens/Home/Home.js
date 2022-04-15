import React, { useState } from "react";
import HomeData from "./HomeData";
import Insert from "../Insert/Insert";
import List from "../List/List";

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

    function getScreenHome() {
        return (
            <HomeData setScreen={setScreen} getScreenInsert={getScreenInsert}
                getScreenList={getScreenList} nameProduct={nameProduct}
                classProduct={classProduct} descriptionProduct={descriptionProduct}
                amountProduct={amountProduct} setNameProduct={setNameProduct}
                setClassProduct={setClassProduct} setAmountProduct={setAmountProduct}
                setDescriptionProduct={setDescriptionProduct} />
        );
    };

    function getScreenInsert() {
        return (
            <Insert nameProduct={nameProduct} classProduct={classProduct}
                descriptionProduct={descriptionProduct} amountProduct={amountProduct}
                setScreen={setScreen} setAmountProduct={setAmountProduct}
                setNameProduct={setNameProduct} setClassProduct={setClassProduct}
                setDescriptionProduct={setDescriptionProduct} getScreenHome={getScreenHome} />
        );
    };

    function getScreenList() {
        return (
            <List nameProduct={nameProduct} classProduct={classProduct}
                descriptionProduct={descriptionProduct} amountProduct={amountProduct}
                setScreen={setScreen} getScreenHome={getScreenHome} />
        );
    };
};
