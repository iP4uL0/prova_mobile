import styled from "styled-components/native";
import Title from "../../components/Titulo/titulo";
import { useEffect, useState } from "react";
import InputTexto from "@/components/Input/input";
import Entypo from "@expo/vector-icons/Entypo";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { api } from "@/utils/api";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

type ContainerInput = {
  error: boolean;
};

export default function Editar() {
  const [email, setEmail] = useState("exemplo@exemplo.com");
  const [erroEmail, setErroEmail] = useState(false);

  const [senha, setSenha] = useState("!Pass123");
  const [erroSenha, setErroSenha] = useState(false);

  const [confSenha, setConfSenha] = useState("!Pass123");
  const [erroConfSenha, setConfErroSenha] = useState(false);

  const [senhaVisivel, setSenhaVisivel] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [formularioValido, setFormularioValido] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "exemplo@exemplo.com") setFormularioValido(true);
    else if (emailRegex.test(email)) {
      setErroEmail(false);
      setFormularioValido(false);
    } else {
      setErroEmail(true);
      setFormularioValido(true);
    }
  }, [email]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (senha == "!Pass123") 
        setFormularioValido(true);
    else if (passwordRegex.test(senha)) 
    {
        setErroSenha(false);
    } else {
        setErroSenha(true);
        setFormularioValido(true);
    }

  }, [senha]);

  useEffect(() => {
        if(senha === confSenha)
        {
            setConfErroSenha(false)
            setFormularioValido(false)
        }
        else{
            setConfErroSenha(true)
            setFormularioValido(true)
        }
  }, [confSenha])

  async function handleEditar() {
    try {
      await api.patch("/usuario", {
        email: email,
        novaSenha: senha,
      });

      alert("Usuario Modificado! Entre novamente")
      router.replace("/");
    } catch (error) {
      if (Platform.OS == "web") alert("Ocorreu um erro ao editar..");
      else Alert.alert("Ops...", "Usuario ja cadastrado");
    }
  }

  return (
    <Tela>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={60}>
        <TouchableWithoutFeedback >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
              <Title texto={"Mude suas informações"} flag={true} />
              <ContainerCampoTexto >
                <View>
                  <ContainerTextInput error={erroEmail}>
                    <InputTexto
                      placeholder="Digite seu email..."
                      onChangeText={(text) => setEmail(text)}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </ContainerTextInput>
                  {erroEmail && <TextErrorHint>Email inválido</TextErrorHint>}
                </View>
                <View>
                  <ContainerTextInput error={erroSenha}>
                    <InputTexto
                      placeholder="Digite sua nova senha..."
                      onChangeText={(text) => setSenha(text)}
                      secureTextEntry={senhaVisivel}
                    />
                    <Pressable onPress={() => setSenhaVisivel(!senhaVisivel)}>
                      <StyledIcon
                        name={senhaVisivel ? "eye" : "eye-with-line"}
                        size={24}
                        color="black"
                      />
                    </Pressable>
                  </ContainerTextInput>
                  {erroSenha && <TextErrorHint>Senha inválida</TextErrorHint>}
                </View>
                <View>
                  <ContainerTextInput error={erroConfSenha}>
                    <InputTexto
                      placeholder="Confirme a senha..."
                      onChangeText={(text) => setConfSenha(text)}
                      secureTextEntry={senhaVisivel}
                    />
                    <Pressable onPress={() => setSenhaVisivel(!senhaVisivel)}>
                      <StyledIcon
                        name={senhaVisivel ? "eye" : "eye-with-line"}
                        size={24}
                        color="black"
                      />
                    </Pressable>
                  </ContainerTextInput>
                  {erroConfSenha && <TextErrorHint>Senha diferentes!</TextErrorHint>}
                </View>
              </ContainerCampoTexto>
              {invalidLogin && (
                <TextErrorHint>Usuário ou senha incorretos!</TextErrorHint>
              )}
              <ContainerBotoes>
                <Botao disabled={formularioValido} onPress={handleEditar}>
                  <TextoBotao>Salvar</TextoBotao>
                </Botao>
              </ContainerBotoes>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Tela>
  );
}

const Tela = styled(SafeAreaView)`
  flex: 1;
  background-color: black;
  padding: 26px;
`;

const ContainerCampoTexto = styled.View`
  margin-top: 60px ;
  gap: 25px;
`;

const ContainerBotoes = styled.View`
  margin-top: 65px;
  gap: 20px;
`;

const ContainerTextInput = styled.View<ContainerInput>`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  border: 3px solid ${({ error }) => (error ? "#B03C3F" : "#33415C")};
  border-radius: 6px;
  background-color: #fff;
`;

const StyledIcon = styled(Entypo)`
  margin-right: 20px;
`;

const Botao = styled.Pressable`
  background-color: #008000;
  padding: 20px;
  border-radius: 6px;
`;

const TextoBotao = styled.Text`
  text-align: center;
  font-size: 24px;
  color: #fff;
`;

const Links = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

const TextErrorHint = styled.Text`
  font-size: 16px;
  color: #e63946;
`;
