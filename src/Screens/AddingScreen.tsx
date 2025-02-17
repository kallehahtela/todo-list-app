import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Navigation & Icons
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { Ionicons } from '@expo/vector-icons';

// Custom Components
import UIButton from "../ui/UIButton";
import ReusableModal from "./ReusableModal";
import { TaskContext } from "../store/TaskContext";

type Props = NativeStackScreenProps<RootStackParamList, 'AddingScreen'>;

const AddingScreen = ({ route, navigation }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const taskContext = useContext(TaskContext)

    if (!taskContext) {
        return null; // Safety check
    }

    const { addTask } = taskContext;

    const handleAddTask = () => {
        if (title.trim() !== '') {
            // Add tasks to context
            addTask(title);
            // Clear input
            setTitle('');
            // Go back to HomeScreen
            navigation.goBack();
        }
    };

    return (
        <SafeAreaView style={styles.outerContainer}>
            <TouchableWithoutFeedback 
                onPress={Keyboard.dismiss} 
                accessible={false}
            >
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
                            `
                        }
                    />

                    {/* Header */}
                    <View style={styles.headerContainer}>
                        <Text 
                            style={styles.headerText}
                        >
                            Here you can create your tasks:
                        </Text>
                        <Text 
                            style={styles.headerSubText}
                        >
                            Currently, you can create one task at a time.
                        </Text>
                    </View>

                    {/* Info Section */}
                    <View 
                        style={styles.infoContainer}
                    >
                        <Text 
                            style={styles.infoText}
                        >
                            Create a new todo
                        </Text>
                        <TouchableOpacity
                            onPress={() => 
                                setModalVisible(true)
                            }
                        >
                            <Ionicons 
                                name='information-circle-outline' 
                                size={30} 
                                color={'#000'} 
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Task Input */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Add a todo"
                            value={title}
                            onChangeText={setTitle}
                        />
                    </View>

                    {/* Add Button */}
                    <UIButton 
                        title='Add a Task' 
                        onPress={handleAddTask} 
                    />
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default AddingScreen;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    headerContainer: {
        marginBottom: 10,
    },
    headerText: {
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 10,
    },
    headerSubText: {
        fontSize: 14,
        textAlign: 'center'
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 25,
        flexDirection: 'row',
        gap: 10,
    },
    infoText: {
        fontSize: 15,
    },
});
