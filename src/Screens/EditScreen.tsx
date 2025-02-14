import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

// Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, 'EditScreen'>;

const EditScreen = ({ route, navigation }: Props) => {
    return (
        <SafeAreaProvider style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Text>Edit Screen</Text>
            </View>
        </SafeAreaProvider>
    );
}

export default EditScreen;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});