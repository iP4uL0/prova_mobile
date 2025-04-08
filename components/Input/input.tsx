import { TextInputProps } from "react-native";
import { CampoTexto } from "./style";

export default function InputTexto({ ...rest} : TextInputProps){
    return(
        <CampoTexto 
            placeholderTextColor={'#6C757D'}
            {...rest}
        />
    )
}