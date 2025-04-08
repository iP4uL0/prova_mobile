import styled from "styled-components/native";
import Title from "../components/Titulo/titulo";
import { useEffect, useState } from "react";
import InputTexto from "@/components/Input/input";
import Entypo from '@expo/vector-icons/Entypo';
import { Pressable, View } from "react-native";

type ContainerInput = View & {
    error : boolean
}

export default function App()
{
    const [email, setEmail] =  useState('exemplo@exemplo.com')
    const [erroEmail, setErroEmail] = useState(false)

    const [senha, setSenha] = useState('!Pass123')
    const [erroSenha, setErroSenha] = useState(false)
    const [senhaVisivel, setSenhaVisivel] = useState(true)

    useEffect(()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(emailRegex.test(email))
        {
            setErroEmail(false)
        }
        else{
            setErroEmail(true)
        }

    },[email])

    useEffect(()=>{
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if(passwordRegex.test(senha)){
            setErroSenha(false)
        }
        else
        {
            setErroSenha(true)
        }
    }, [senha])

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
                <View>
                    <ContainerTextInput error={erroEmail}>
                        <InputTexto 
                            placeholder="Digite seu email..."
                            onChangeText={text => setEmail(text)}
                        />
                    </ContainerTextInput>
                    {
                        erroEmail ? <TextErrorHint>Email invalido</TextErrorHint>
                            :
                        null
                    }
                </View>
                <View>
                    <ContainerTextInput error={erroSenha}>
                            <InputTexto 
                                placeholder="Digite sua senha..."
                                onChangeText={text => setSenha(text)}
                                secureTextEntry={senhaVisivel}
                            />
                            <Pressable onPress={() => setSenhaVisivel(!senhaVisivel)}>
                                <StyledIcon name={senhaVisivel ? "eye" : "eye-with-line"} size={24} color="black" />
                            </Pressable>
                    </ContainerTextInput>
                    {
                        erroSenha ? <TextErrorHint>Senha invalida</TextErrorHint> 
                            :
                        null
                    }
                </View>
        </ContainerCampoTexto>
        <ContainerBotoes>
            <Botao 
                onPress={(()=> console.log('Cliking here'))}
            >
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

const ContainerTextInput = styled.View<ContainerInput>`
    width: 100%;
    height: 80px;
    flex-direction: row;
    align-items: center;
    border: 3px solid ${({error} : {error: boolean}) => 
    error ? '#B03C3F' : '#33415C'};
    border-radius: 6px;
    background-color: #fff;
`

const StyledIcon = styled(Entypo)`
    margin-right: 20px;
`

const Botao = styled.Pressable`
    background-color: #2193F3;
    padding: 20px;
    border-radius: 6px;
`
const TextoBotao = styled.Text`
    text-align: center;
    font-size: 24px;
    color: #fff;
`
const Links = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 16px;
`

const TextErrorHint = styled.Text`
    font-size: 16px;
    color: #E63946;
`