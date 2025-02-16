import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

// Navgation & Icons
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { AntDesign } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

type Task = {
    id: string;
    title: string;
    tasks: string[];
    completed: boolean;
};

const HomeScreen = ({ route, navigation}: Props) => {
    const [task, setTask] = useState<Task[]>([]);

    return (
        <SafeAreaProvider style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                {
                    task.length === 0 ? (
                        <View style={styles.noneTasks}>
                        <AntDesign 
                            name='bulb1'
                            size={34}
                            color={'#000'}
                        />
                        <Text style={styles.noneTasksText}>
                            You're Welcome
                        </Text>
                    </View>
                    ) : (
                        <FlatList 
                            data={task}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                
                                >
                                    <Text>{item.title}</Text>
                                    <Text>{item.tasks}</Text>
                                    <Text>{item.completed}</Text>
                                </TouchableOpacity>
                            )}
                        >

                        </FlatList>
                    )
                }
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
    noneTasks: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    noneTasksText: {
        fontSize: 16,
        fontWeight: '600'
    }
});