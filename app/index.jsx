import { 
    View, 
    Text, 
    TextInput,
    Pressable,
    StyleSheet } from "react-native";

import styled from "styled-components/native";
import Title from "../components/Titulo/titulo";

export default function App(){
    return(
     <Tela>
        <Title 
            texto={"Entrar"} 
            flag={true}
        />
        <Title 
            texto={"Bem vindo ao app"} 
            flag={false}
        />
        <ContainerCampoTexto>
            <CampoTexto 
                placeholder="Digite seu e-mail..." 
                placeholderTextColor={'#6C757D'}
            />
            <CampoTexto 
                placeholder="Digite sua senha..." 
                placeholderTextColor={'#6C757D'}
            />
        </ContainerCampoTexto>
        <ContainerBotoes>
            <Botao>
                <TextoBotao>Entrar</TextoBotao>
            </Botao>
            <Links>Cadastre-se</Links>
            <Links>Esqueci a senha</Links>
        </ContainerBotoes>
    </Tela>)
}

const Tela = styled.View`
    flex: 1;
    background-color: #33415C;
    padding: 26px;
`

const ContainerCampoTexto = styled.View`
    gap: 25px;
`
const CampoTexto = styled.TextInput`
    background-color: #fff;
    font-size: 18px;
    padding: 20px;
`
const ContainerBotoes = styled.View`
    margin-top: 65px;
    gap: 20px;
`
const Botao = styled.Pressable`
    background-color: #fff;
    padding: 20px;
`
const TextoBotao = styled.Text`
    text-align: center;
    font-size: 24;
    font-weight: bold;
`
const Links = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 16px;
`
// const estilo = StyleSheet.create({
//     tela: {
//         flex: 1,
//         backgroundColor: '#33415C',
//         padding: 26
//     },
//     titulo: {
//         fontSize: 56,
//         fontWeight: 'bold',
//         color: '#ffff',
//         marginTop: 80,
//         marginBottom: 80
//     },
//     container_campos_texto: {
//         gap: 25
//     },
//     campo_texto: {
//         backgroundColor: '#fff',
//         fontSize: 18,
//         textAlignVertical: 'center',
//         paddingHorizontal: 16,
//         padding: 20,
//     },
//     container_botoes: {
//         marginTop: 65,
//         gap: 20
//     },
//     botao: {
//         backgroundColor: '#fff',
//         padding: 20
//     },
//     texto_botao : {
//         textAlign: 'center',
//         fontSize: 24,
//         fontWeight: 'bold'
//     },
//     links: {
//         textAlign: 'center',
//         color: '#fff',
//         fontSize: 16
//     }
// })