import styled from "styled-components/native";
import Title from "../components/Titulo/titulo";
import { useEffect, useState } from "react";
import InputTexto from "@/components/Input/input";
import { View } from "react-native";
export default function App()
{

    const [email, setEmail] =  useState('example@example.com')
    const [hasEmailError, setHasEmailError] = useState(false)

    const [senha, setSenha] = useState('@Example123')
    const [hasSenhaError, setHasSenhaError] = useState(false)


    useEffect(()=>{

        // Significa que a o texto que a pessoa digitar deve ser um email valido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email))
        {
            // Se o texto não incluir o caractere @ e tiver menos que 3 carateres
            // sera mostrado o campo como incorreto
            setHasEmailError(true)
        }
        else{

            // Quando a pessoa inserir um email valido, as bordas vermelhas vão sumir
            setHasEmailError(false)
        }
    },[email])

    useEffect(()=>{
        //  Usando expressão regular para diminuir a quantidade 
        //  de condicionais para testar a senha
        //  Esse Regex testa se a senha:
        //  * Pelo menos 8 caracteres
        //  * Pelo menos uma letra maiúscula
        //  * Pelo menos um número
        //  * Pelo menos um caractere especial (!@#$%^&*)
        
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if(!passwordRegex.test(senha))
        {
            setHasSenhaError(true)
        }
        else
        {
            setHasSenhaError(false)
        }
    },[senha])

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
            <InputTexto 
                    erro={hasEmailError}
                    placeholder="Digite seu email..."
                    onChangeText={text => setEmail(text)}
            />
            {hasEmailError ? <TextErrorHint>E-mail invalido</TextErrorHint> : null}
           </View>

            <View>
                <InputTexto 
                        erro={hasSenhaError}
                        placeholder="Digite sua senha..."
                        onChangeText={text => setSenha(text)}
                />
                {hasSenhaError ? <TextErrorHint>Senha invalida</TextErrorHint> : null}
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