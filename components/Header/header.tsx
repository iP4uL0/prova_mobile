import Feather from '@expo/vector-icons/Feather';
import { Container, ContainerBackIcon, ContainerLogo, Imagem } from './style';
import { View } from 'react-native';

export default function Header(){
    return(
    <Container>
        <ContainerBackIcon>
            <Feather name="arrow-left" size={24} color="white" />
        </ContainerBackIcon>
        <ContainerLogo>
            <Imagem source={require('../../assets/images/react-logo.png')} />
        </ContainerLogo>
    </Container>)
}