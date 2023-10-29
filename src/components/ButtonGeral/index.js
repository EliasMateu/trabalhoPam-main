import { StyleSheet, activityIndicator, Text, TouchableOpacity } from 'react-native';

export default function ButtonGeral({ onPress,
    text,
    disabled,
    isLoading,
    type }) {
    const buttonVar = {
        active: {
            button: {
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
                width: 231,
                margin: 8,
                padding: 16,
                alignItems: "center",
                borderWidth: 2,
                borderColor: "black",
                borderRadius: 90,
                flexDirection: 'row',
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

    let selected = '';

    switch (type) {
        case "primary":
            selected = styles.primary;
            break;
        case "secondary":
            selected = styles.secondary;
        default:
            selected = styles.inactive;
            break;
    }

    const buttonType = selected;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={false} style={[buttonType, buttonStyle.button]}>
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

const styles = StyleSheet.create({
    primary: {
        backgroundColor: "#00563B",
    },
    secondary: {
        backgroundColor: "#9BCD31",
    },
    inactive: {
        backgroundColor: "#565656",
    }
});