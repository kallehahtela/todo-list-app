import React, { useState, useContext } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

// Context
import { TaskContext } from "../store/TaskContext";
import UIButton from "../ui/UIButton";

type Props = NativeStackScreenProps<RootStackParamList, "EditScreen">;

const EditScreen = ({ route, navigation }: Props) => {
    const taskContext = useContext(TaskContext);

    if (!taskContext) {
        return null; // Safety check
    }

    const { editTask } = taskContext;
    const { task } = route.params; // Get task from navigation

    const [title, setTitle] = useState(task.title);

    const handleSave = () => {
        if (title.trim() !== "") {
            // Update task in context
            editTask(task.id, title);
            // Go back to HomeScreen
            navigation.goBack();
        }
    };


    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
        >
            <SafeAreaView style={styles.outerContainer}>
                <View style={styles.innerContainer}>

                <Text
                    style={styles.editText}
                >
                    Edit Task
                </Text>

                {/* Input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                    />

                </View>
                <UIButton 
                    title="Save Changes"
                    onPress={handleSave}
                />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default EditScreen;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
    },
    editText: {
        marginBottom: 20,
        fontSize: 17,
        fontWeight: '600',
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
});
