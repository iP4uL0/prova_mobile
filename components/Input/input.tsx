import { TextInputProps } from "react-native";
import { Input } from "./style";
import { useState } from "react";

type MeuCampoDeTexto = TextInputProps & {
    hasError: boolean;
}

export default function CampoTexto({ hasError ,...rest}: MeuCampoDeTexto){
    return(
        <Input 
            hasError={hasError}
            placeholderTextColor={'#6C757D'}
            {...rest}
        />
    )
}

