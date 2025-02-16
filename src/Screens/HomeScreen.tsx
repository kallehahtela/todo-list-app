import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

// Navgation & Icons
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { AntDesign, Ionicons } from '@expo/vector-icons';

// Custom Files
import ReusableModal from "./ReusableModal";

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

type Task = {
    id: string;
    title: string;
    tasks: string[];
    completed: boolean;
};

const HomeScreen = ({ route, navigation}: Props) => {
    const [task, setTask] = useState<Task[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaProvider style={styles.outerContainer}>
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
                    onPress={() => setModalVisible(true)}
                    style={styles.iconContainer}
                >
                    <Ionicons 
                        name='information-circle-outline'
                        size={30}
                        color={'#000'}
                    />
                </TouchableOpacity>
                {
                    task.length === 0 ? (
                        <View>
                            {/* Icon and Welcome Text */}
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

                            {/* Text display for indicating we don't have todos */}
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoText}>
                                    No todos found. Start by adding one!,
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
    iconContainer: {
        position: 'absolute',
        right: 20,
        top: 80,
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
    infoText: {
        fontWeight: '500',
        fontSize: 17,
        textAlign: 'center',
    },
    textGap: {
        marginTop: 5,
    }
});