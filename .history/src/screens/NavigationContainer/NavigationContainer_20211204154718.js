import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function MenuContainer(props) {
    const { navigation } = props;
    return (
        <View style={styles.content}>
            <View style={styles.container}>
                <MenuButton
                    title="HOME"
                    source={require("../../../assets/icons/home.png")}
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                />
                <MenuButton
                    title="CATEGORIES"
                    source={require("../../../assets/icons/category.png")}
                    onPress={() => {
                        navigation.navigate("Categories");
                    }}
                />
                <MenuButton
                    title="SEARCH"
                    source={require("../../../assets/icons/search.png")}
                    onPress={() => {
                        navigation.navigate("Search");
                    }}
                />
            </View>
        </View>
    );
}

MenuContainer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }),
};
