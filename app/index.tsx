import styled from "styled-components/native";
import Title from "../components/Titulo/titulo";
import { useEffect, useState } from "react";
import InputTexto from "@/components/Input/input";
export default function App()
{

    const [email, setEmail] =  useState('')

    useEffect(()=>{
        console.log(email)
    },[email])

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
           <InputTexto 
                erro={true}
                placeholder="Digite seu email..."
                onChangeText={text => setEmail(text)}
           />
           <InputTexto 
                erro={false}
                placeholder="Digite sua senha..."
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
    font-size: 24px;
    font-weight: bold;
`
const Links = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 16px;
`