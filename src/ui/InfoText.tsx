import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface InfoTextProps {
    text: string;
};

const InfoText: React.FC<InfoTextProps> = ({ 
    text
}) => {
    // Split the text into an array using newline ('\n')
    const textLines = text.split('\n');

    return (
        <View style={styles.container}>
            {textLines.map((line, index) => (
                <Text key={index} style={styles.text}>
                    {line.trim()}
                </Text>
            ))}
        </View>
    );
}

export default InfoText;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: '#000',
        marginBottom: 5, // Space between lines
    }
});