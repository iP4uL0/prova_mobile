import { View, ViewProps } from "react-native"
import styled from "styled-components/native"

type ContainerStyled = ViewProps & {
    canBack : boolean
}

export const Container = styled.View<ContainerStyled>`
    background-color: #1a212e;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: ${({canBack} : {canBack: boolean}) => 
    canBack ? 'space-between' : 'center'};
`

export const Imagem = styled.Image`
    height: 50px;
    width: 50px;
`