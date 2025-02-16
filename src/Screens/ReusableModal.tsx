import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Modal, 
    TouchableOpacity 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Custom Files
import InfoText from "../ui/InfoText";

interface ReusableModalProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    text: string;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
    visible,
    onClose, 
    title,
    text,
}) => {
    return (
        <Modal
            visible={visible}
            animationType='slide'
            onRequestClose={onClose}
        >
            <SafeAreaView style={styles.overlay}
            >
                <View style={styles.modalContent}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <InfoText text={text} />

                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.closeBtn}
                    >
                        <Text style={styles.closeText}>
                            Close
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    );
}

export default ReusableModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'center',
    },
    modalContent: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeBtn: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    closeText: {
        color: '#000',
        fontWeight: 'bold',
    }
});