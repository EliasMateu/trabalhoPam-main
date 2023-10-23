import { TextInput, View } from "react-native";
import style from "./style";

export default function inputs({ placeholder,
}) {
    
    return (
        <TextInput style={style.inputText} placeholder={placeholder}></TextInput>
    );
}