import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import colors from "../constants/colors";

interface ButtonProps {
    title: string;
    onPress(): void;
};

const UIButton: React.FC<ButtonProps> = ({ title, onPress }) => {
    return (
        <View style={styles.outerContainer}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.btnContainer}
            >
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default UIButton;

const styles = StyleSheet.create({
    outerContainer: {
        width: '100%',
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        width: '50%',
        padding: 10,
        backgroundColor: colors.primary,
        borderRadius: 5,
    },
    btnText: {
        color: colors.btnText,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '800'
    }
});