import { View, Text, TextInput, Button } from "react-native";

export default function Login()
{
    return(
        <View>
            <View>
                <Text>Entrar</Text>
            </View>
            <View>
                <TextInput 
                    placeholder="E-mail"
                />
                <TextInput
                    placeholder="Senha"
                />
            </View>
            <View>
                <Button title="Entrar" />
                <Text>Cadastre-se</Text>
            </View>
        </View>
    )
}