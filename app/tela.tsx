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
    font-size: 24px;
    font-weight: bold;
`
const Links = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 16px;
`