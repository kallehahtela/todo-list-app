import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

// Custom Files
import colors from "../constants/colors";

// Context
import { TaskContext } from "../store/TaskContext";

type Props = NativeStackScreenProps<RootStackParamList, 'CompletedScreen'>;

const CompletedScreen = ({ route, navigation }: Props) => {
    const taskContext = useContext(TaskContext);

    if (!taskContext) {
        return null; // Safety check
    };

    const { completedTasks } = taskContext;
    
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.outerContainer}>
            {
                completedTasks.length === 0 ? (
                    <Text style={styles.noCompleted}>
                        No Tasks completed yet.
                    </Text>
                ) : (
                    <View style={styles.completed}>
                        <Text style={styles.title}>Completed Tasks</Text>
                        <FlatList
                            contentContainerStyle={styles.flatList}
                            data={completedTasks}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View
                                    style={styles.taskCard}
                                >
                                    <Text style={styles.taskText}>
                                        {item.title}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                )
            }
        </View>
    </SafeAreaView>
    );
};

export default CompletedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noCompleted: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    completed: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    taskItem: {
        padding: 10,
        marginVertical: 5,
    },
    flatList: {
        marginTop: 80,
        width: '100%',
        gap: 20,
    },
    taskCard: {
        backgroundColor: colors.completed,
        borderRadius: 10,
        padding: 10,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskText: {
        color: colors.btnText,
        fontWeight: '700',
        fontSize: 17,
    },
});