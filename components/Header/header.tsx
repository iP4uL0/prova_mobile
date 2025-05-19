import Feather from '@expo/vector-icons/Feather';
import { Container, Imagem } from './style';
import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { Pressable } from 'react-native';

export default function Header(props: NativeStackHeaderProps){
    
    /*
        Essa função checa se é possivel voltar para uma tela anterior na 
        pilha (Stack) de telas, mas lembre-se que a decisão de qual tela pode navegar 
        para qual é totalmente sua:
        Se você usar o push, sera possivel voltar, se usar o replace, não.
    */
       
    const canGoBack = props.navigation.canGoBack();

    return(
    <Container canBack={canGoBack}>
        {
            canGoBack ?
            <Pressable onPress={ () => props.navigation.goBack()}>
                <Feather name="arrow-left" size={24} color="white" />
            </Pressable>
            : 
            null
        }
        <Imagem source={require('../../assets/images/react-logo.png')} />
    </Container>)
}