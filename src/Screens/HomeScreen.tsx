import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

// Navgation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ route, navigation}: Props) => {
    return (
        <SafeAreaProvider style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Text>Home Screen</Text>

                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => 
                            navigation.navigate('CompletedScreen')
                        }
                    >
                        <Text>Try navigate to completed screen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaProvider>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        margin: 10,
        width: '100%',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: '80%',
        borderColor: '#cacaca',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
});