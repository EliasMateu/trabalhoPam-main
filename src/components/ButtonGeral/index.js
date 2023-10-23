import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Antdesign } from "@expo/vector-icons";
import styles from './styles';

export default function Button({ onPress,
    text,
    icon,
    disabled,
    isLoading }) {
    const buttonVar = {
        active: {
            button: {
                backgroundColor: "#00563B",
                width: 231,
                padding: 16,
                alignItems: "center",
                borderWidth: 2,
                borderColor: "black",
                borderRadius: 90,
                justifyContent: "center"
            },
            text: {
                color: "#fff",
                textAlign: "center",
                fontSize: 24,
                allingItems: "center"
            }
        },
        inactive: {
            button: {
                backgroundColor: "#565656",
                width: 231,
                margin: 8,
                padding: 16,
                alignItems: "center",
                borderWidth: 2,
                borderColor: "black",
                borderRadius: 90,
            },
            text: {
                color: "#fff",
                textAlign: "center",
                fontSize: 24,
                allingItems: "center"
            }
        },
    }
    const buttonStyle = disabled ? buttonVar.inactive : buttonVar.active;
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={false} style={[styles.button, buttonStyle.button]}>
            {isLoading == true ? (
                <ActivityIndicator color={'#000'} />
            ) : (
                <>
                    <Text style={buttonStyle.text}>
                        {text}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    )
}