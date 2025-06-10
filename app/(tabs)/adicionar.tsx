import {
    CameraMode,
    CameraType,
    CameraView,
    useCameraPermissions,
  } from "expo-camera";
  import { useRef, useState } from "react";
  import { Button, Pressable, StyleSheet, Text, View } from "react-native";
  import { Image } from "expo-image";
  import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
  
    /* 
        Bibliotecas usadas: 
        expo-camera - usado para manipular diretamente a camera
        referencia: https://docs.expo.dev/versions/latest/sdk/camera/
        expo-image - usado para mostrar as imagens de uma maneira mais eficiente
        referencia: https://docs.expo.dev/versions/latest/sdk/image/

        Os icones mostrados nessa pagina são meramente ilustrativos
    */

    /*
        Sobre câmeras no desenvolvimento de software:
        Em TODAS as plataformas, seja web ou mobile, é obrigatório pedir a permissão do usuário para acessar a
        câmera e qualquer outra funcionalidade relacionada a imagens dentro do dispositivo dele.
        Tanto Android quanto IOS obrigam o software a pedir essa permissão ou não deixam o app se conectar com
        a câmera.
    */

  export default function Adiconar() {

    // State usado para pedir permissão para usar a câmera
    const [permission, requestPermission] = useCameraPermissions();
    
    /*
        É um hook que retorna um objeto mutável com uma propriedade "current" que pode ser 
        inicializada com um valor inicial (ou null se não for fornecido). 
        Esse objeto persiste durante toda a vida útil do componente 
        (não é recriado em novas renderizações).
    */
    const ref = useRef<CameraView>(null);

    // De forma semelhante ao HTML, os componentes de imagem no react native só trabalham com URLs/URIs
    const [uri, setUri] = useState<string | null>(null);

    //É possivel alternar entre foto e filmagem, mas nesse projeto vou usar apenas o modo foto
    const [mode, setMode] = useState<CameraMode>("picture");

    // State criado para controlar a mudança entre a camera frontal e traseira
    const [facing, setFacing] = useState<CameraType>("back");
  
    // Primeiro é sempre de bom tom testar se o usuario ja deu a permissão pra acessar a câmera ou não
    if (!permission) {
      return null;
    }
  
    // Caso ele não tenha dado a permisão, vamos solicitar manualmente
    if (!permission.granted) {
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>
            Precismos de permissão para usar a câmera
          </Text>
          <Button onPress={requestPermission} title="Dar permissão" />
        </View>
      );
    }
  
    // Função que efetivamente tira a foto, separei por questão de organização
    const takePicture = async () => {
      const photo = await ref.current?.takePictureAsync();
      if(photo)
        setUri(photo?.uri);
    };

    // Função para alternar entre camera frontal e traseira, separei por questão de organização
    const toggleFacing = () => {
      setFacing((prev) => (prev === "back" ? "front" : "back"));
    };
  
    // Funcão que retorna o quadro com a foto tirada para o usuario confirmar que esta correta
    const renderPicture = () => {
        if(uri)
            return (
            <View>
            <Image
                source={{ uri }}
                contentFit="contain"
                style={{ width: 300, aspectRatio: 1 }}
            />
            <Button onPress={() => setUri(null)} title="Tirar outra foto" />
            </View>
        );
        else
            return(<View>
                <Text>Nenhuma foto foi tirada ainda!</Text>
            </View>)
    };
  
    // Função que será chamada quando a câmera for aberta para a fotografia
    const renderCamera = () => {
      return (
        <CameraView
          style={styles.camera}
          ref={ref}
          mode={mode}
          facing={facing}
          mute={false}
          responsiveOrientationWhenOrientationLocked
        >
            {/*
                Aqui nós fazemos uma pequisa "graça visual"
                Enquando o usuario estiver pressionando o botão que representa
                a ação de tirar a foto (botao branco grande na esquerda) ele
                e a tela vão ficar opacos, de forma a mostrar para a pessoa essa ação 
            */}
          <View style={styles.shutterContainer}>
            <Pressable onPress={takePicture}>
              {({ pressed }) => (
                <View
                  style={[
                    styles.shutterBtn,
                    {
                      opacity: pressed ? 0.5 : 1,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.shutterBtnInner,
                      {
                        backgroundColor: mode === "picture" ? "white" : "red",
                      },
                    ]}
                  />
                </View>
              )}
            </Pressable>
            <Pressable onPress={toggleFacing}>
              <FontAwesome6 name="rotate-left" size={32} color="white" />
            </Pressable>
          </View>
        </CameraView>
      );
    };
  
    //Se a pessoa ja tiver tirado uma foto, o state uri estara preenchido, por 
    return (
      <View style={styles.container}>
        {uri ? renderPicture() : renderCamera()}
      </View>
    );
  }
  
  //Estilização simples apenas para termos uma ideia de layout
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    camera: {
      flex: 1,
      width: "100%",
    },
    shutterContainer: {
      position: "absolute",
      bottom: 44,
      left: 0,
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 30,
    },
    shutterBtn: {
      backgroundColor: "transparent",
      borderWidth: 5,
      borderColor: "white",
      width: 85,
      height: 85,
      borderRadius: 45,
      alignItems: "center",
      justifyContent: "center",
    },
    shutterBtnInner: {
      width: 70,
      height: 70,
      borderRadius: 50,
    },
  });