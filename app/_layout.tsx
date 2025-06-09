import Header from "@/components/Header/header";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//  ----------------------- LEIA, IMPORTANTE ----------------------------------
/*
    O modo de navegação Stack Navigation tem por padrão um cabeçalho 
    que aparece em todas as telas que são declaradas como rotas
    É possivel tanto estiliza-lo quanto remove-lo dependendo do que você 
    quiser fazer.
    Nesse caso o que manda é a estética e o design geral da aplicação
    Usando a propriedade screenOptions={} podemos estilizar diretamente
    o cabeçalho automatico que o Expo Router cria, ou criar um
    Component personalizado e usa-lo como cabeçalho.
    Se usar essa opção no component <Stack> a mesma estilização sera usada
    em todas as rotas.
    Caso queira uma estilização personalizada, coloque a opção screenOptions={}
    na Stack.Screen que voce deseja.
    Refêrencia: https://docs.expo.dev/router/advanced/stack/
*/

export default function RootLayout(){
    return(
        <SafeAreaProvider>
            <StatusBar 
                barStyle={"light-content"}
                backgroundColor={"transparent"}
                translucent
            />
            <Stack screenOptions={{ header: Header}} >
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="cadastro" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" />
            </Stack>
        </SafeAreaProvider>
    )
}

