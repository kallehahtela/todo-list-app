import React from "react";
import { 
    TouchableOpacity, 
    TextInput, 
    StyleSheet, 
} from "react-native";

interface TodoItemProps {
    name: string;
    placeholder: string;
    onLongPress(): void;
};

const TodoItem: React.FC<TodoItemProps> = ({ name, onLongPress, placeholder }) => {
    return (
        
        <TouchableOpacity
            style={styles.outerContainer}
        >
            <TextInput
                style={styles.inputContainer}
                placeholder={placeholder}
                value={name}
                placeholderTextColor={'#000'}
            />
        </TouchableOpacity>
    );
}

export default TodoItem;

const styles = StyleSheet.create({
    outerContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '70%',
        height: 50,
        paddingLeft: 20,
        borderColor: '#cacaca',
        borderWidth: 1,
        backgroundColor: '#cacaca',
        borderRadius: 7,
    }
});