import React, { useState, useContext } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    FlatList,
    Alert
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";

// Navigation & Icons
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { AntDesign, Ionicons } from '@expo/vector-icons';

// Custom Files
import ReusableModal from "./ReusableModal";
import colors from "../constants/colors";

// Context
import { TaskContext, Task } from "../store/TaskContext";

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const taskContext = useContext(TaskContext);

    if (!taskContext) {
        return null; // Safety check
    }

    const { tasks, deleteTask, completeTask } = taskContext;

    // Function to confirm delete
    const confirmDeleteTask = (id: number) => {
        Alert.alert(
            'Delete Task?',
            'Are you sure you want to delete this task?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => deleteTask(id) }
            ]
        );
    };

    // Render Right Action for Swipe Gesture
    const renderRightActions = (id: number) => {
        return (
            <TouchableOpacity style={styles.completeButton} onPress={() => completeTask(id)}>
                <Text style={styles.completeButtonText}>Complete</Text>
            </TouchableOpacity>
        );
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <SafeAreaView style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    {/* Modal Implement */}
                    <ReusableModal 
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        title="Information"
                        text={
                            `
                            CREATE A TASK:\n
                            Step 1: Press 'Add' tab.\n
                            Step 2: Enter details needed.\n
                            Step 3: Press 'Add Task' button.\n
                            Step 4: Enjoy and do those tasks.
                            \n
                            EDIT / DELETE TASKS:\n
                            Swipe right for mark as complete.\n
                            Press a while for delete task.\n
                            Tap task for edit.
                            `
                        }
                    />

                    {/* Info Container */}
                    <TouchableOpacity 
                        onPress={() => 
                        setModalVisible(true)} 
                        style={styles.iconContainer}
                    >
                        <Ionicons 
                            name='information-circle-outline' 
                            size={30} 
                            color={'#000'} 
                        />
                    </TouchableOpacity>

                    {tasks.length === 0 ? (
                        <View>
                            {/* No tasks message */}
                            <View style={styles.noneTasks}>
                                <AntDesign name='bulb1' size={34} color={'#000'} />
                                <Text style={styles.noneTasksText}>You're Welcome</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoText}>
                                    No todos found. Start by adding one!
                                </Text>
                                <Text 
                                    style={[styles.infoText, styles.textGap]}
                                >
                                    For more info, tap the 'info' icon.
                                </Text>
                            </View>
                        </View>
                    ) : (
                        <FlatList
                            contentContainerStyle={styles.flatList} 
                            data={tasks}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <Swipeable renderRightActions={() => renderRightActions(item.id)}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('EditScreen', { task: item })}
                                        onLongPress={() => confirmDeleteTask(item.id)}
                                        style={styles.taskCard}
                                    >
                                        <Text style={styles.taskText}>{item.title}</Text>
                                    </TouchableOpacity>
                                </Swipeable>
                            )}
                        />
                    )}
                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    outerContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    noneTasks: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    noneTasksText: {
        fontSize: 20,
        fontWeight: '600'
    },
    infoContainer: {
        marginTop: 10,
    },
    textGap: {
        marginTop: 5,
    },
    infoText: {
        fontWeight: '500',
        fontSize: 17,
        textAlign: 'center',
    },
    flatList: {
        marginTop: 80,
        width: '100%',
        gap: 20,
    },
    taskCard: {
        backgroundColor: colors.todo,
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
    completeButton: {
        backgroundColor: colors.completed,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: "100%",
        borderRadius: 5,
    },
    completeButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});
